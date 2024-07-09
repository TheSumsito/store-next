'use client';
import "@/public/css/styles.css"

import React from 'react';
import Link from 'next/link'
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const baseUrlComponents = 'list-products/components';
const baseUrlPeripherals = 'list-products/peripherals';
const baseUrlAccount = 'account';

const listRoutesModules = {
    // **** COMPONENTS ****
    processors: `/${baseUrlComponents}/processors`,
    graphicsCards: `/${baseUrlComponents}/graphics-card`,
    motherboards: `/${baseUrlComponents}/motherboards`,
    powerSources: `/${baseUrlComponents}/power-sources`,
    cabinets: `/${baseUrlComponents}/cabinets`,
    cpuCooling: `/${baseUrlComponents}/cpu-cooling`,
    diskDrives: `/${baseUrlComponents}/disk-drives`,
    memoriesRam: `/${baseUrlComponents}/memories-ram`,

    // **** PERIPHERALS ****
    monitors: `/${baseUrlPeripherals}/monitors`,
    keyboard: `/${baseUrlPeripherals}/keyboard`,
    audio: `/${baseUrlPeripherals}/audio`,
    pcAccessories: `/${baseUrlPeripherals}/pc-accessories`,

    // **** ACCOUNT ****
    myData: `/${baseUrlAccount}/my-data`,
    myAssemblies: `/${baseUrlAccount}/my-assemblies`,
}

const items = [
    {
        key: 'components',
        label: 'COMPONENTES',
        icon: <MailOutlined />,
        children: [
            { 
                key: 1, 
                label: 'Procesadores',
                children: [
                    { key: 11, label: <Link href={{pathname: listRoutesModules.processors, query: { name: 'intel' }}}>Intel</Link> },
                    { key: 12, label: <Link href={{pathname: listRoutesModules.processors, query: { name: 'amd' }}}>AMD</Link> },
                ]
            },
            { 
                key: 2, 
                label: 'Tarjetas de Video',
                children: [
                    { key: 21, label: <Link href={{pathname: listRoutesModules.graphicsCards, query: {name: 'nvidia'}}}>NVIDIA</Link> },
                    { key: 22, label: <Link href={{pathname: listRoutesModules.graphicsCards, query: {name: 'amd'}}}>AMD</Link> },
                ]
            },
            { key: 3, label: <Link href={listRoutesModules.motherboards}>Placas Madre</Link> },
            { key: 4, label: <Link href={listRoutesModules.powerSources}>Fuentes de Poder</Link> },
            { key: 5, label: <Link href={listRoutesModules.cabinets}>Gabinetes</Link> },
            { 
                key: 6, 
                label: 'Refrigeración CPU',
                children: [
                    { key: 61, label: <Link href={{pathname: listRoutesModules.cpuCooling, query: {name: 'disipador'}}}>Disipadores</Link> },
                    { key: 62, label: <Link href={{pathname: listRoutesModules.cpuCooling, query: {name: 'liquida'}}}>Líquidas</Link> },

                ]
            },
            { 
                key: 7, 
                label: 'Almacenamiento',
                children: [
                    { key: 71, label: <Link href={{pathname: listRoutesModules.diskDrives, query: {name: 'hdd'}}}>Discos Duro</Link> },
                    { key: 72, label: <Link href={{pathname: listRoutesModules.diskDrives, query: {name: 'ssd'}}}>Discos SSD</Link> },
                ]
            },
            { key: 8, label: <Link href={listRoutesModules.memoriesRam}>Memorias Ram</Link> },
        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'peripheral',
        label: 'PERIFĖRICOS',
        icon: <SettingOutlined />,
        children: [
            { key: 100, label: <Link href={listRoutesModules.monitors}>Monitores</Link> },
            { key: 101, label: <Link href={listRoutesModules.keyboard}>Teclados</Link> },
            { 
                key: 102, 
                label: 'Audio',
                children: [
                    { key: 1021, label: <Link href={{pathname: listRoutesModules.audio, query: {name: 'audifonos'}}}>Audífonos</Link> },
                    { key: 1022, label: <Link href={{pathname: listRoutesModules.audio, query: {name: 'microfonos'}}}>Micrófonos</Link> },
                ]
            },
            { key: 103, label: <Link href={listRoutesModules.pcAccessories}>Accesorios PC</Link> },
        ],
    },
    {
        key: 'myAccount',
        label: 'MI CUENTA',
        icon: <SettingOutlined />,
        children: [
            { key: 104, label: <Link href={listRoutesModules.myData}>Mis Datos</Link> },
            { key: 105, label: <Link href={listRoutesModules.myAssemblies}>Mis Ensamblados</Link> },
            { key: 106, label: <Link href="/">Cerrar Sesion</Link> },
        ],
    },
];

const Header = () => {
    const onClick = (event) => {
        const { key } = event;
    };
    return (
        <Menu
            onClick={onClick}
            style={{
                width: 256,
            }}
            defaultOpenKeys={['components', 'myAccount']}
            mode="inline"
            items={items}
        />
    );
};

export default Header;