import React, { useState } from "react";
import FormField from "../../ui/formField/FormField";
import { User, createUser } from "../redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateUserPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentDate = new Date();
  const [user, setUser] = useState<User>({
    id: currentDate.getTime(),
    name: "",
    job: "",
    weight: 0,
    height: 0,
    createDate: currentDate.getTime(),
  });

  function onChange(e:any){
    const {name, value} = e.target
    setUser({...user,[name]: value})
  };

  function onSumbit(){
    dispatch(createUser(user))
    navigate("/")
  }

  return (
    <div>
      <FormField
        type="text"
        placeholder="ФИО"
        name="name"
        value={user.name}
        onChange={onChange}
      />
      <FormField
        type="text"
        placeholder="работа"
        name="job"
        value={user.job}
        onChange={onChange}
      />
      <FormField
        type="text"
        placeholder="вес тела..."
        name="weight"
        value={user.weight}
        onChange={onChange}
      />
      <FormField
        type="number"
        placeholder="рост..."
        name="height"
        value={user.height}
        onChange={onChange}
      />
      <button className="bg-[#3366FF] py-1 px-4 rounded-xl text-white" onClick={onSumbit}>
        добавить
      </button>
    </div>
  );
}
