import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Form,
  Image,
  Button,
  Container,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import CarCardAdmin from "../component/CarCardAdmin";
import PopUp from "../component/PopUp";
import SortButton from "../component/SortButton";

export default function CarAdmin() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [modalId, setmodalId] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [data, setData] = useState([]);
  const [err, setErr] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "",
  });

  useEffect(() => {
    getDetailedData();
  }, [form]);

  const tokenAdmin = localStorage.getItem("tokenadmin");
  useEffect(() => {
    if (!tokenAdmin) {
      navigate("/admin-signin");
    }
  });

  const getDetailedData = async () => {
    try {
      const res = await axios.get(
        `https://api-car-rental.binaracademy.org/admin/v2/car?name=${
          form.name
        }&category=${form.category.toLowerCase()}&pageSize=12`,
        {
          headers: {
            access_token: localStorage.getItem("tokenadmin"),
          },
        }
      );
      // console.log(res);
      setData(res.data.cars);
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleModal = (id) => {
    id !== null && setShow(true);
    setmodalId(id);
  };
  const handleClose = () => {
    setShow(false);
    setmodalId(null);
  };

  const goToSearch = (id) => navigate(`/listcar/edit/${id}`);

  const handleDelete = (id) => {
    axios
      .delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`, {
        headers: {
          access_token: localStorage.getItem("tokenadmin"),
        },
      })
      // .then((res) => console.log(res))
      .then((res) => {
        setShow(false);
        setmodalId(null);
        getDetailedData();
        setShowToast(true);
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  const handleAdd = () => {
    navigate("/listcar/add-car");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center pt-3 pb-2 px-2">
        <h3 className="">List Car</h3>
      </div>

      <div>
        <SortButton handleChange={handleChange} handleAdd={handleAdd} />
      </div>

      {showToast && (
        <div style={{ position: "relative" }}>
          <ToastContainer position="top-center">
            <Toast delay={3000} className="text-center">
              <Toast.Body className="bg-dark text-white">
                Data Berhasil Dihapus
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      )}
      <Col>
        <Row className="d-flex justify-content-evenly">
          {show && modalId !== null && (
            <PopUp
              show={setShow}
              modalId={modalId}
              closeButton={handleClose}
              deleteButton={() => handleDelete(modalId)}
            />
          )}
          {data.map((item) => (
            <Col className="pb-4" md={3} xs={6}>
              <CarCardAdmin
                carimage={item.image}
                carname={item.name}
                carsize={item.category}
                carprice={item.price}
                carupdate={item.updatedAt}
                caredit={() => goToSearch(item.id)}
                cardelete={() => handleModal(item.id)}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Container>
  );
}
