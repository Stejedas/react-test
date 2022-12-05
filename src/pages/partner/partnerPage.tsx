import { ColumnsType } from "antd/es/table/interface";
import { useEffect, useState } from "react";
import MenuHeader from "../../components/header/header";
import TableComponent from "../../components/table/table";
import { getAllProducts } from "../../services/getAllProducts";
import { DataType } from "../../utils/interfaces";


const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
        width: '10%',
    }, {
        title: 'Title',
        dataIndex: 'title',
        filterSearch: true,
        onFilter(value, product) {
            return product.title.startsWith(value.toString())
        },
        sorter: (a, b) => a.title.length - b.title.length,
        sortDirections: ['descend', 'ascend'],
        width: '50%',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        filters: [
            { text: "Men's clothing", value: "men's clothing" },
            { text: "Electronics", value: "electronics" },
            { text: "Jewelery", value: "Jewelery" },
            { text: "Women's clothing", value: "women's clothing" }
        ],
        filterSearch: true,
        onFilter(value, product) {
            return product.category.startsWith(value.toString())
        },
        width: '20%',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        render: (price) => `${price} €`,
        sorter: (a, b) => a.price - b.price,
        width: '20%',
    },
];


const PartnerPage: React.FC = () => {

    const [data, setData] = useState<DataType[]>();
    const [loading, setLoading] = useState(false);
  
    
    const fetchData = () => {
        setLoading(true);
        getAllProducts().then((results) => {
            setData(results);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <MenuHeader></MenuHeader>
        <div className="container_table_partner">
        <TableComponent dataTable={data} columnTable={columns} loadingTable={loading}></TableComponent>

        </div>

        
       { /** FOOTER */}
        </>
    )
}

export default PartnerPage;