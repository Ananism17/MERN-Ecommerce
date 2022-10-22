import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FcApproval, FcCancel } from 'react-icons/fc';



const UserOrdersPage = () => {
  return (
    <Row className="m-5">
      <Col md={12}>
        <h1>My Orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Order details</th>
            </tr>
          </thead>
          <tbody>
            {[<FcApproval />, <FcCancel />].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx +1}</td>
                  <td>Mark Twain</td>
                  <td>2022-09-12</td>
                  <td>$124</td>
                  <td>
                    {item}
                  </td>
                  <td>
                    <Link to="/user/order-details">Check Order Details</Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrdersPage;