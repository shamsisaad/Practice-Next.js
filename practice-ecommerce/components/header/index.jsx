import { Menu } from "antd"
import { HomeFilled } from "@ant-design/icons";
import Link from "next/link"

export default function Header () {
    return <div className="appHeader">
             <Menu
             mode="horizontal"
             items={[
                {
                label: '<HomeFilled />',
                key: 'home',
                },
                {
                    label: 'Mens',
                    key: 'mens',
                    },
                {
                    label: 'Womens',
                    key: 'womens',
                    },
                    {
                        label: 'Accessories',
                        key: 'accessories',
                        },    

             ]}/>
            </div>
    };
  