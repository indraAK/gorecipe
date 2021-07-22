import illustrationImg from "../images/page-not-found.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <img src={illustrationImg} className="illustration" alt="" />
        <h4 className="heading-4">Halaman tidak ditemukan!</h4>
        <Link to="/" className="btn btn-primary">
          Kembali ke Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
