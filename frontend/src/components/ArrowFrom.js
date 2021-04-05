import React from "react";

const ArrowForm = () => {
  return (
    <form>
      <div class="form-group">
        <label>Streng Type:</label>
        <input type="text" class="form-control" placeholder="Streng Type" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Streng længde:</label>
        <input type="text" class="form-control" placeholder="Streng længde" />
      </div>
      <button type="submit" class="btn btn-primary">
        Opret Pil
      </button>
    </form>
  );
};

export default ArrowForm;
