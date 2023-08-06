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
                    children: [
                        {
                            label: "Men's Shirts",
                            Key: "mens-shirts",
                        },
                        {
                            label: "Men's Shoes",
                            Key: "mens-shoes",
                        },
                        {
                            label: "Men's Watches",
                            Key: "mens-watches",
                        },
                    ],
                    },
                {
                    label: 'Womens',
                    key: 'womens',
                    children: [
                        {
                            label: "Women's Dresses",
                            Key: "womens-dresses",
                        },
                        {
                            label: "Women's Shoes",
                            Key: "womens-shoes",
                        },
                        {
                            label: "Women's Watches",
                            Key: "womens-watches",
                        },
                    ],
                    },
                    {
                        label: 'Accessories',
                        key: 'accessories',
                        children: [
                            {
                                label: "Fragrances",
                                key: "fragrance",
                            },
                        ],
                        },    

             ]}/>
            </div>
    };
  