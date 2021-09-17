import React, { useReducer } from "react";

const initialState = {
  firstName: {
    value: "",
    error: null,
  },
  lastName: {
    value: "",
    error: null,
  },
  email: {
    value: "",
    error: null,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIRSTNAME":
      return {
        ...state,
        firstName: {
          ...state.firstName,
          value: action.payload,
        },
      };
    case "SET_FIRSTNAME_ERROR":
      return {
        ...state,
        firstName: {
          ...state.firstName,
          error: action.payload,
        },
      };
    case "SET_LASTNAME":
      return {
        ...state,
        lastName: {
          ...state.lastName,
          value: action.payload,
        },
      };
    case "SET_LASTNAME_ERROR":
      return {
        ...state,
        lastName: {
          ...state.lastName,
          error: action.payload,
        },
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: {
          ...state.email,
          value: action.payload,
        },
      };
    case "SET_EMAIL_ERROR":
      return {
        ...state,
        email: {
          ...state.email,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
}

const ReducerApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFirstnameChange = (e) => {
    if (e.target.value.length < 5) {
      dispatch({
        type: "SET_FIRSTNAME_ERROR",
        payload: "First name must be at least 5 character",
      });
    } else {
      dispatch({
        type: "SET_FIRSTNAME_ERROR",
        payload: "",
      });
    }
    dispatch({
      type: "SET_FIRSTNAME",
      payload: e.target.value,
    });
  };

  const handleLastnameChange = (e) => {
    if (e.target.value.length < 5) {
      dispatch({
        type: "SET_LASTNAME_ERROR",
        payload: "Last name must be at least 5 character",
      });
    } else {
      dispatch({
        type: "SET_LASTNAME_ERROR",
        payload: "",
      });
    }

    dispatch({
      type: "SET_LASTNAME",
      payload: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    if (e.target.value.length < 6) {
      dispatch({
        type: "SET_EMAIL_ERROR",
        payload: "Email must be at least 6 characters",
      });
    } else {
      dispatch({
        type: "SET_EMAIL_ERROR",
        payload: "",
      });
    }

    dispatch({
      type: "SET_EMAIL",
      payload: e.target.value,
    });
  };
  return (
    <div>
      <form>
        <div style={inputDataDivStyle}>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => handleFirstnameChange(e)}
          />
        </div>
        {state.firstName.error && <p>{state.firstName.error}</p>}
        <div style={inputDataDivStyle}>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => handleLastnameChange(e)}
          />
        </div>
        {state.lastName.error && <p>{state.lastName.error}</p>}
        <div style={inputDataDivStyle}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
        {state.email.error && <p>{state.email.error}</p>}
      </form>
    </div>
  );
};

export default ReducerApp;
