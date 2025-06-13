import useOrders from "../hooks/useOrders";
import { Container, Row, Col, Card } from "react-bootstrap";

const OrderPage = () => {
  const { orders, loading, error } = useOrders();

  console.log("Orders:", orders);

  if (loading) return <p className="text-center">Loading orders...</p>;
  if (error)
    return <p className="text-danger text-center">Failed to load orders.</p>;
  // if (orders.length === 0) return <p className="text-center">No orders yet.</p>;

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Your Orders</h2>
      <div>
        {orders.length === 0 ? (
          <div className="text-center mt-5">
            <img
              src="/no_orders.jpg"
              alt="No orders yet"
              className="img-fluid"
              style={{ maxWidth: "300px", opacity: 0.6 }}
            />
            <p className="mt-3 text-muted">You have no orders yet.</p>
          </div>
        ) : (
          orders.map((order) => (
            <Card
              key={order.id}
              className="mb-5 shadow-sm border-0 rounded-4 p-3"
            >
              {/* Order Header */}
              <div className="d-flex flex-wrap justify-content-between align-items-start mb-4">
                <div>
                  {order.items.map((item, index) => (
                    <h4 className="text-capitalize fw-semibold" key={index}>
                      {item.product.title}
                    </h4>
                  ))}
                  <div className="text-muted small">
                    <i className="bi bi-calendar-event me-1"></i>
                    {new Date(order.created_at).toLocaleDateString()}
                    <span className="mx-2">|</span>
                    <i className="bi bi-box-seam me-1"></i>
                    {order.items.length} items
                  </div>
                </div>

                <span
                  className={`badge rounded-pill px-3 py-2 fs-6 text-uppercase fw-semibold ${
                    order.status === "ordered"
                      ? "bg-secondary text-white"
                      : order.status === "shipped"
                      ? "bg-warning text-dark"
                      : order.status === "delivered"
                      ? "bg-success text-white"
                      : "bg-dark text-white"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Order Progress Status */}
              <div className="d-flex justify-content-between text-center mb-4">
                {/* Processing */}
                <div>
                  <div
                    className={`rounded-circle p-3 mb-2 ${
                      ["ordered", "shipped", "delivered"].includes(
                        order.status?.toLowerCase()
                      )
                        ? "bg-warning-subtle"
                        : "bg-light border"
                    }`}
                  >
                    <i
                      className={`bi bi-box fs-4 ${
                        ["ordered", "shipped", "delivered"].includes(
                          order.status?.toLowerCase()
                        )
                          ? "text-warning"
                          : "text-muted"
                      }`}
                    ></i>
                  </div>
                  <small
                    className={`fw-semibold ${
                      ["ordered", "shipped", "delivered"].includes(
                        order.status?.toLowerCase()
                      )
                        ? "text-warning"
                        : "text-muted"
                    }`}
                  >
                    Processing
                  </small>
                </div>

                {/* Shipped */}
                <div>
                  <div
                    className={`rounded-circle p-3 mb-2 ${
                      ["shipped", "delivered"].includes(
                        order.status?.toLowerCase()
                      )
                        ? "bg-warning-subtle"
                        : "bg-light border"
                    }`}
                  >
                    <i
                      className={`bi bi-bag-check fs-4 ${
                        ["shipped", "delivered"].includes(
                          order.status?.toLowerCase()
                        )
                          ? "text-warning"
                          : "text-muted"
                      }`}
                    ></i>
                  </div>
                  <small
                    className={`fw-semibold ${
                      ["shipped", "delivered"].includes(
                        order.status?.toLowerCase()
                      )
                        ? "text-warning"
                        : "text-muted"
                    }`}
                  >
                    Shipped
                  </small>
                </div>

                {/* Delivered */}
                <div>
                  <div
                    className={`rounded-circle p-3 mb-2 ${
                      order.status?.toLowerCase() === "delivered"
                        ? "bg-warning-subtle"
                        : "bg-light border"
                    }`}
                  >
                    <i
                      className={`bi bi-envelope-check fs-4 ${
                        order.status?.toLowerCase() === "delivered"
                          ? "text-warning"
                          : "text-muted"
                      }`}
                    ></i>
                  </div>
                  <small
                    className={`fw-semibold ${
                      order.status?.toLowerCase() === "delivered"
                        ? "text-warning"
                        : "text-muted"
                    }`}
                  >
                    Delivered
                  </small>
                </div>
              </div>

              <Row>
                {/* Order Items */}
                <Col md={7}>
                  <h6 className="fw-semibold mb-3">Order Items</h6>
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="d-flex align-items-center justify-content-between bg-light rounded-3 px-3 py-2 mb-2"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className=" rounded bg-light"
                          style={{
                            width: "60px",
                            height: "60px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={item.product.image} // Adjust this if image path is different
                            alt={item.product.title}
                            className="img-fluid h-100 w-100 object-fit-cover"
                          />
                        </div>
                        <div>
                          <div className="fw-semibold">
                            {item.product.title}
                          </div>
                          <small className="text-muted">
                            Qty: {item.quantity}
                          </small>
                        </div>
                      </div>

                      <div className="fw-semibold text-end text-nowrap">
                        ₹{item.product.price}
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 ps-2">
                    {order.invoice && order.invoice.invoice_file && (
                      <div className="mb-3">
                        <a
                          href={order.invoice.invoice_file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary"
                        >
                          <i className="bi bi-download me-2"></i>
                          Download Invoice
                        </a>
                      </div>
                    )}
                  </div>
                </Col>

                {/* Delivery Info */}
                <Col md={5}>
                  <div className="bg-warning-subtle rounded-3 p-3 mb-3">
                    <h6 className="fw-semibold mb-3">Delivery Information</h6>

                    <div className="small text-muted mb-2 d-flex align-items-center">
                      <i className="bi bi-calendar-check me-2"></i>
                      <span>
                        Est. Delivery:&nbsp;
                        {order.est_delivery ? (
                          <strong>
                            {new Date(order.est_delivery).toLocaleDateString()}
                          </strong>
                        ) : (
                          <span className="text-warning">Pending</span>
                        )}
                      </span>
                    </div>

                    <div className="small text-muted d-flex align-items-start">
                      <i className="bi bi-geo-alt me-2 mt-1"></i>
                      <span>
                        {order.shipping_address}, {order.city}, {order.state},{" "}
                        {order.zip_code}
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center bg-light rounded-3 px-3 py-3">
                    <div className="fw-semibold">Total Amount</div>
                    <div className="fw-bold text-danger">
                      ₹{order.total_amount}
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          ))
        )}
      </div>
    </Container>
  );
};

export default OrderPage;
