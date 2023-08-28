import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/form-slice";

let validation = false;

export const Form = () => {
  const dispatch = useDispatch(); // You can use the reducer action with the dispatch functions
  const userName = useSelector((state) => state.form.userName); // select the redux initialState property
  const password = useSelector((state) => state.form.password);

  const handleUsernameChange = (e) => {
    dispatch(formActions.updateUsername(e.target.value)); // update the initialState with the Handlerfunction
  };

  const handlePasswordChange = (e) => {
    dispatch(formActions.updatePassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length <= 3 || password.length < 5) {
      validation = true;
      alert("Username or password is to short");
      dispatch(formActions.clearInputField());
      return;
    }
    alert(`username: ${userName}, password: ${password}`);
    dispatch(formActions.clearInputField());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <div className="d-flex flex-row justify-content-between">
          <label htmlFor="id" className="form-label">
            UserName
          </label>
          {validation && (
            <span className="text-danger">Incorrect value length</span>
          )}
        </div>
        <input
          name="userName"
          onChange={handleUsernameChange}
          type="text"
          className="form-control"
          id="id"
          value={userName}
        />
      </div>
      <div className="mb-3">
        <div className="d-flex flex-row justify-content-between">
          <label htmlFor="pass" className="form-label">
            Password
          </label>
          {validation && (
            <span className="text-danger">Incorrect value length</span>
          )}
        </div>
        <input
          name="password"
          onChange={handlePasswordChange}
          type="password"
          className="form-control"
          id="pass"
          value={password}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
