import MainPreview from "../components/product_preview/MainPreview";
import PreviewDetails from "../components/product_preview/PreviewDetails";
import usePreviewDetails from "../hooks/usePreviewDetails";
import { useParams } from "react-router-dom";

const ProductPreview = () => {
  const { previewDetails, loading, error } = usePreviewDetails();
  const { category, subcategory } = useParams();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!previewDetails || previewDetails.length === 0)
    return <div>No products found.</div>;

  // ✅ Filter products by category (case-insensitive)
  const filteredByCategory = previewDetails.filter(
    (product) => product.category?.toLowerCase() === category?.toLowerCase()
  );

  // ✅ Further filter by subcategory (if applicable)
  const filteredBySubcategory = filteredByCategory.filter(
    (product) =>
      product.subcategory?.toLowerCase() === subcategory?.toLowerCase()
  );

  // ✅ Group all by their slug (variant groups)
  const groupedByVariant = previewDetails.reduce((acc, product) => {
    const key = product.slug;
    if (!acc[key]) acc[key] = [];
    acc[key].push(product);
    return acc;
  }, {});

  // ✅ Get unique variant slugs from filtered products
  const uniqueVariants = [...new Set(filteredByCategory.map((p) => p.slug))];

  // ✅ Pick the product matching current subcategory (or first one as fallback)
  const currentProduct =
    filteredBySubcategory.length > 0
      ? filteredBySubcategory[0]
      : filteredByCategory[0];

  return (
    <div>
      <MainPreview />
      <div className="d-flex justify-content-center align-items-center">
        {currentProduct ? (
          <PreviewDetails
            variantData={groupedByVariant[currentProduct.slug]}
            uniqueVariants={uniqueVariants}
            previewDetails={previewDetails}
            subcategory={subcategory}
          />
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center w-100 py-5">
            <img
              src="/coming_soon.jpg"
              alt="No products available"
              className="img-fluid mb-3"
              style={{ maxWidth: "300px", opacity: 0.8 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPreview;
