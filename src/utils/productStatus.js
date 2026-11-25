// src/utils/productStatus.js
// One place that explains what a product's `status` field means on the site.
// The field is written by Product Lister.py (with a backup each time):
//
//   (missing) / "live"  -> published and for sale
//   "out"               -> published, but shown as out of stock and not buyable
//   "draft"             -> hidden everywhere; the product stays in products.js
//                          so it can be made live again at any time.
export const STATUS_LIVE = "live";
export const STATUS_OUT = "out";
export const STATUS_DRAFT = "draft";

export const productStatus = (product) => {
    const status = product && product.status;
    if (status === STATUS_OUT || status === STATUS_DRAFT) return status;
    return STATUS_LIVE;
};

export const isDraft = (product) => productStatus(product) === STATUS_DRAFT;

export const isOutOfStock = (product) => productStatus(product) === STATUS_OUT;

export const isForSale = (product) => productStatus(product) === STATUS_LIVE;

// Everything that should still be listed on category pages, search and
// carousels — drafts are hidden, out-of-stock items stay visible.
export const isListed = (product) => !isDraft(product);

export default productStatus;
