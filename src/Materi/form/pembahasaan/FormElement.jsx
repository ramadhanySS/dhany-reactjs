import React from "react";

export default class Komponent extends React.Component {
  state = {
    nama: "",
    jurusan: "",
    gender: "",
    alamat: "",
    member: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    nama: ${this.state.nama}
    jurusan: ${this.state.jurusan}
    gender: ${this.state.gender}
    alamat: ${this.state.alamat}
    member: ${this.state.member ? "Yes" : "No"}
    `);
    this.setState({
      nama: "",
      jurusan: "",
      gender: "",
      alamat: "",
      member: false,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nama:
            <input
              type="text"
              name="nama"
              onChange={(e) => this.setState({ nama: e.target.value })}
            />
          </label>
          <br />
          <label>
            Jurusan:
            <select
              name="jurusan"
              onChange={(e) => this.setState({ jurusan: e.target.value })}>
              <option value="">Pilih Jurusan</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Teknik Komputer">Teknik Komputer</option>
            </select>
          </label>
          <br />
          <label>
            Jenis Kelamin:
            <input
              type="radio"
              value="Laki-Laki"
              name="gender"
              onChange={(e) => this.setState({ gender: e.target.value })}
            />{" "}
            Laki-Laki
            <input
              type="radio"
              value="Perempuan"
              name="gender"
              onChange={(e) => this.setState({ gender: e.target.value })}
            />
            Perempuan
          </label>
          <br />
          <label>
            Alamat:{" "}
            <textarea
              cols="30"
              rows="10"
              onChange={(e) => this.setState({ alamat: e.target.value })}
            />
          </label>
          <br />
          <label>
            Member{" "}
            <input
              type="checkbox"
              checked={this.state.member}
              name="member"
              onChange={(e) => this.setState({ member: e.target.checked })}
            />
          </label>
          <br />
          <br />
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}
