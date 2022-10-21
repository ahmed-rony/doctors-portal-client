import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AutoCompleteField from "./AutoCompleteField";
import TextField from "@mui/material/TextField";
import "../BookingCard.css";
import { useForm } from "react-hook-form";
import Autocomplete from '@mui/material/Autocomplete';
import { timeSlots } from '../../../InfoData.Config';
import '../BookingCard.css';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const BookingModal = ({ open, date, handleClose, booking }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.service = booking.name;
    data.appointDate = date;
    data.created = new Date();

    fetch("https://serene-taiga-29892.herokuapp.com/addAppointment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          handleClose();
          alert("Appointment Created Successfully");
        }
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="text-center modal-box" sx={style}>
          <h3 className=" brandC">{booking.name}</h3>
          <h5 className="mb-4 text-secondary">On {date.toDateString()}</h5>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <AutoCompleteField></AutoCompleteField> */}
            <Autocomplete
              size="small"
              style={{ margin: "0 auto" }}
              className="form-field"
              options={timeSlots}
              autoHighlight
              getOptionLabel={(option) => option.time}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  {option.time}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Time"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                  {...register("select time", { required: true })}
                />
                
              )}
            />

            <TextField
              className="form-field"
              label="Your Name"
              variant="outlined"
              size="small"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="error-msg d-block">
                <small>This field is required</small>
              </span>
            )}
            <TextField
              className="form-field"
              type="number"
              label="Phone Number"
              variant="outlined"
              size="small"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="error-msg d-block">
                <small>This field is required</small>
              </span>
            )}
            <TextField
              className="form-field"
              label="Email"
              variant="outlined"
              size="small"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error-msg d-block">
                <small>This field is required</small>
              </span>
            )}

            <input type="submit" className="btn bgC modal-btn" />
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;
