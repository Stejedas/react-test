import React, { useState } from 'react';
import { Card } from 'antd';
import { Product } from '../../utils/interfaces';
import { HeartFilled, InfoCircleOutlined } from '@ant-design/icons';
import ModalCardProduct from '../modal/modal';

const { Meta } = Card;

interface Props {
    product: Product
}



const CardProduct: React.FunctionComponent<Props> = ({ product }) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const functions = {
        handleOk,
        handleCancel
    }
    return (

        <Card
            hoverable
            style={{ width: 'auto', height: '600px', padding: "20px" }}

        >
            <div className='container_img_card'>
                <img alt="example" className='img_card' src={product.image} />
            </div>
            <Meta title={product.title} description={`${product.price} €`} />
            <div className='container_heard_card'>
                <HeartFilled className='heard_card' />
            </div>
            <div className='container_button_info'>
            <button className="button_info" type="button" onClick={showModal}>
                <InfoCircleOutlined className='button_info_icon'/> <p className='p_info_card'>Info</p>
            </button>
            </div>
            <ModalCardProduct product={product} functionS={functions} isModalOpen={isModalOpen}></ModalCardProduct>
        </Card>


    );
}

export default CardProduct;