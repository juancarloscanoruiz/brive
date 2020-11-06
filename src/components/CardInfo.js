import React from "react";
import { Col, Input } from "antd";

export default function CardInfo({role, image, name, email}){
    const { TextArea } = Input;
    return(
        <Col span={12} className="border-right-gray">
         <Col span={18} className="mx-auto">
            <h3 className="text-plus font-black">Datos del {role}</h3>
            <div className="d-flex align-items-center mb-3">
              <div className="image-container">
                <img src={image} 
                  alt="User Image"
                  className="user-image"
                  />
              </div>
              <div className="ml-2">
                <p className="mb-1 text-normal font-bold">{name}</p>
                <p className="mb-0 text-small text-light">{email}</p>
              </div>
            </div>
            <div>
                <p className="text-normal font-bold">Observaciones para el {role}</p>
                <TextArea showCount maxLength={100} />
                <input type="file" />
            </div>
          </Col>
        </Col>
    )
}