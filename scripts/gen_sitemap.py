"""Regenerate public/sitemap.xml from products.js.

Called automatically by Update LocalTech Website.bat before every build.
Can also be run manually:  python scripts/gen_sitemap.py

- Real paths only (no "#") so Google indexes each page separately.
- URLs end in "/" because GitHub Pages serves each route from a real
  <route>/index.html file (see scripts/make_static_routes.py). Without the
  trailing slash Google would hit a 301 redirect on its way to the page.
- Drafted products are excluded; out-of-stock ones stay (page still exists).
"""
import datetime
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRODUCTS = os.path.join(ROOT, "src", "data", "products.js")
OUT = os.path.join(ROOT, "public", "sitemap.xml")
BASE = "https://localtechza.co.za"

JS_STR = r'"(?:[^"\\]|\\.)*"|\'(?:[^\'\\]|\\.)*\''


def un_js_str(literal):
    body = literal[1:-1]
    body = re.sub(
        r"\\(.)",
        lambda m: {"n": "\n", "t": "\t", "r": "\r"}.get(m.group(1), m.group(1)),
        body,
    )
    return body


with open(PRODUCTS, "r", encoding="utf-8", newline="") as f:
    text = f.read()

# Walk every product object, string-aware enough to read handle/status.
handles = []
for m in re.finditer(r"\{\s*\n\s*id:\s*(\d+),", text):
    start = m.start()
    depth = 0
    i = start
    in_str = None
    while i < len(text):
        c = text[i]
        if in_str:
            if c == "\\":
                i += 2
                continue
            if c == in_str:
                in_str = None
        elif c in ('"', "'"):
            in_str = c
        elif c in "{[":
            depth += 1
        elif c in "}]":
            depth -= 1
            if depth == 0:
                break
        i += 1
    block = text[start:i + 1]

    handle_m = re.search(r"handle:\s*(" + JS_STR + ")", block)
    status_m = re.search(r'\bstatus:\s*"(live|out|draft)"', block)
    if not handle_m:
        continue
    if status_m and status_m.group(1) == "draft":
        continue  # hidden from the site, so not indexable
    handles.append(un_js_str(handle_m.group(1)))

# Static pages, in a sensible crawl order (root is handled separately).
static_pages = [
    "/products/all",
    "/products/desktop-pcs",
    "/products/laptops",
    "/products/mini-pcs",
    "/products/monitors",
    "/products/gaming-pcs",
    "/products/pc-accessories",
    "/products/other-tech",
    "/services",
    "/bookings",
    "/contact",
    "/about",
    "/returns",
    "/terms",
    "/privacy",
]

pages = ["/"] + [p + "/" for p in static_pages]
pages += ["/products/" + h + "/" for h in handles]

today = datetime.date.today().isoformat()

parts = [
    "<?xml version='1.0' encoding='UTF-8'?>\n"
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
]
for path in pages:
    parts.append(
        "  <url>\n"
        f"    <loc>{BASE}{path}</loc>\n"
        f"    <lastmod>{today}</lastmod>\n"
        "  </url>\n\n"
    )
parts.append("</urlset>\n")

with open(OUT, "w", encoding="utf-8", newline="") as f:
    f.write("".join(parts))

print(f"wrote {OUT}")
print(f"  {len(pages)} urls ({len(handles)} products, {len(pages) - len(handles)} static)")
assert "#" not in "".join(parts), "hash found in sitemap!"
