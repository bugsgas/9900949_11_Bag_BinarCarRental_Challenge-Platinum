import React from "react";
import { Button } from "react-bootstrap";

const SortButton = ({ handleChange, handleAdd }) => {
  const handleCategoryChange = (value) => {
    handleChange({ target: { name: "category", value } });
  };

  return (
    <div className="d-flex align-items-center px-2 pb-4">
      <Button
        name="category"
        variant="outline-primary"
        style={{ padding: "5px 20px", marginRight: "15px" }}
        onClick={() => handleCategoryChange("")}
      >
        All
      </Button>
      <Button
        name="category"
        onClick={() => handleCategoryChange("small")}
        variant="outline-primary"
        style={{ padding: "5px 35px", marginRight: "15px" }}
      >
        Small
      </Button>
      <Button
        name="category"
        onClick={() => handleCategoryChange("medium")}
        variant="outline-primary"
        style={{ padding: "5px 35px", marginRight: "15px" }}
      >
        Medium
      </Button>
      <Button
        name="category"
        onClick={() => handleCategoryChange("large")}
        variant="outline-primary"
        style={{ padding: "5px 35px", marginRight: "15px" }}
      >
        Large
      </Button>

      <Button
        className="ms-auto"
        style={{ padding: "5px 20px" }}
        onClick={handleAdd}
      >
        Add Car
      </Button>
    </div>
  );
};

export default SortButton;
