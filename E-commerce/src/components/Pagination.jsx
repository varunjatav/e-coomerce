import { useDispatch, useSelector } from "react-redux";
import { paginationActions } from "../store/paginationSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  let skip = useSelector((store) => store.page);

  const handlePre = () => {
    dispatch(paginationActions.previous(10));
  };
  const handleIncrementby10 = () => {
    dispatch(paginationActions.incrementby10(10));
  };

  const handleIncrementby20 = () => {
    dispatch(paginationActions.incrementby20(20));
  };
  const handleIncrementby30 = () => {
    dispatch(paginationActions.incrementby30(30));
  };

  const handleNext = () => {
    dispatch(paginationActions.next(10));
  };
  return (
    <nav aria-label="..." className="d-flex justify-content-center">
      <ul className="pagination">
        <li className={`page-item ${skip === 0 && "disabled"}`}>
          <a className="page-link" onClick={handlePre}>
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" onClick={handleIncrementby10}>
            1
          </a>
        </li>
        <li className="page-item " aria-current="page">
          <a className="page-link" onClick={handleIncrementby20}>
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" onClick={handleIncrementby30}>
            3
          </a>
        </li>
        <li className={`page-item ${skip === 30 && "disabled"}`}>
          <a className="page-link" onClick={handleNext}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
