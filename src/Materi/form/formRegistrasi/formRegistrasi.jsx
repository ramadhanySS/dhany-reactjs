import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 20px auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
`;

const Input = styled.input`
  width: 94%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
    width: 94%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

class RegistrationForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    jurusan: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      email,
      password,
      confirmPassword,
      jurusan,
      gender,
      address,
    } = this.state;

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok.");
      return;
    } else {
      if (password.length < 8) {
        alert("Password minimal 8 Karakter.");
        return;
      }
    }

    alert(
      `Registrasi Berhasil!\n\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}\nJenis Kelamin: ${gender}\nJurusan: ${jurusan}\nAlamat: ${address}`
    );
  };

  render() {
    return (
      <FormContainer>
        <Title>Form Registrasi</Title>
        <form onSubmit={this.handleSubmit}>
          <Label>Username:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <Label>Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <Label>Password:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <Label>Konfirmasi Password:</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            required
          />
          <Label>Jenis Kelamin:</Label>
          <Select
            id="gender"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
            required>
            <option value="">Pilih jenis kelamin</option>
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
          </Select>
          <Label>Jurusan:</Label>
          <Select
            id="jurusan"
            name="jurusan"
            value={this.state.jurusan}
            onChange={this.handleChange}
            required>
            <option value="">Pilih jurusan</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Manajemen Informatika">Manajemen Informatika</option>
            <option value="Akuntansi">Akuntansi</option>
          </Select>
          <Label>Alamat:</Label>
          <Textarea
            id="address"
            name="address"
            rows="5"
            value={this.state.address}
            onChange={this.handleChange}
            required
          />
          <Button type="submit">Register</Button>
        </form>
      </FormContainer>
    );
  }
}

export default RegistrationForm;
