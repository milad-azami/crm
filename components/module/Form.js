import FormInput from "./FormInput";
import ItemList from "./ItemList";

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <FormInput
        name="name"
        label="Name"
        type="text"
        vlaue={form.name}
        onChange={changeHandler}
      />
      <FormInput
        name="lastName"
        label="Last Name"
        type="text"
        vlaue={form.lastName}
        onChange={changeHandler}
      />
      <FormInput
        name="email"
        label="Email"
        type="text"
        vlaue={form.email}
        onChange={changeHandler}
      />
      <FormInput
        name="phone"
        label="Phone"
        type="tel"
        vlaue={form.phone}
        onChange={changeHandler}
      />
      <FormInput
        name="address"
        label="Address"
        type="text"
        vlaue={form.address}
        onChange={changeHandler}
      />
      <FormInput
        name="postalCode"
        label="Postal Code"
        type="text"
        vlaue={form.postalCode}
        onChange={changeHandler}
      />
      <FormInput
        name="date"
        label="Date"
        type="date"
        vlaue={form.date}
        onChange={changeHandler}
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
