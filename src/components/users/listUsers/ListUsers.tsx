import React from "react";
import FormField from "../../ui/formField/FormField";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { UserInitialState } from "../redux/reducer";
import { User } from "../redux/action";

export default function ListUsers() {
  const { users }: any = useSelector((state: RootState) => state.users);
  const navigate = useNavigate();

  function navigateToCreateUserPage() {
    navigate("/create-user");
  }

  function addZeroForDate(number: number): number | string {
    if (number < 10) {
      return `0` + number;
    }
    return number
  }
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-[30px] font-bold">Пользовтельей({users.length})</h1>
          <div className=" flex items-center gap-10">
            <FormField type="search" placeholder="найти пользователя по ФИО" />
            <button
              className="bg-[#3366FF] py-1 px-4 rounded-xl"
              onClick={navigateToCreateUserPage}
            >
              Добавить+
            </button>
          </div>
        </div>
        <div>
          <table className="w-full mt-10">
            <tr className="bg-red-300">
              <th style={{ border: "2px solid black" }} className="p-3">
                Дата регистрации
              </th>
              <th style={{ border: "2px solid black" }} className="p-3">
                ФИО
              </th>
              <th style={{ border: "2px solid black" }} className="p-3">
                работа
              </th>
              <th style={{ border: "2px solid black" }} className="p-3">
                вес тела
              </th>
              <th style={{ border: "2px solid black" }} className="p-3">
                рост
              </th>
            </tr>
            {users.map((user: User) => {
              const date = new Date(user.createDate);
              return (
                <>
                  <tr className="bg-gray-200">
                    <td style={{border: "1px solid black"}} className="p-3">
                      {addZeroForDate(date.getDate())}.{addZeroForDate(date.getMonth() + 1)}.
                      {addZeroForDate(date.getFullYear())} В {addZeroForDate(date.getHours())}:
                      {addZeroForDate(date.getMinutes())}:{addZeroForDate(date.getSeconds())}
                    </td>
                    <td style={{border: "1px solid black"}} className="p-3">{user.name}</td>
                    <td style={{border: "1px solid black"}} className="p-3">{user.job}</td>
                    <td style={{border: "1px solid black"}} className="p-3">{user.weight}</td>
                    <td style={{border: "1px solid black"}} className="p-3">{user.height}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
