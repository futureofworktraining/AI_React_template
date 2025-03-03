// App.js
import React from 'react';
import { Admin, Resource, List, Datagrid, TextField, DateField, EditButton, SimpleForm, Edit, Create, TextInput, DateInput, SelectInput, EmailField } from 'react-admin';
import fakeRestDataProvider from 'ra-data-fakerest';
import authProvider from './authProvider';
import { products, productOwners, requiredDocuments, locations, users, demandReports } from './data';

import ProductIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReportIcon from '@mui/icons-material/Assessment';

// Data Provider
const dataProvider = fakeRestDataProvider({
    products: products,
    productOwners: productOwners,
    requiredDocuments: requiredDocuments,
    locations: locations,
    users: users,
    demandReports: demandReports,
}, true);

// Product Components
const ProductList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="Product ID" />
            <TextField source="name" label="Product Name" />
            <TextField source="description" />
            <DateField source="offeredFrom" label="Offered From" />
            <TextField source="locationId" label="Location ID" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);

const ProductEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" label="Product ID" />
            <TextInput source="name" label="Product Name" />
            <TextInput source="description" />
            <DateInput source="offeredFrom" label="Offered From" />
            <TextInput source="locationId" label="Location ID" />
            <SelectInput
                source="status"
                choices={[
                    { id: 'active', name: 'Active' },
                    { id: 'inactive', name: 'Inactive' },
                ]}
            />
        </SimpleForm>
    </Edit>
);

const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" label="Product ID" />
            <TextInput source="name" label="Product Name" />
            <TextInput source="description" />
            <DateInput source="offeredFrom" label="Offered From" />
            <TextInput source="locationId" label="Location ID" />
            <SelectInput
                source="status"
                choices={[
                    { id: 'active', name: 'Active' },
                    { id: 'inactive', name: 'Inactive' },
                ]}
            />
        </SimpleForm>
    </Create>
);

// Product Owner Components
const ProductOwnerList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="productId" label="Product ID" />
            <TextField source="type" />
            <TextField source="role" />
            <TextField source="name" />
            <TextField source="surname" />
            <TextField source="phone" />
            <EmailField source="email" />
            <DateField source="startDate" label="Start Date" />
            <DateField source="endDate" label="End Date" />
        </Datagrid>
    </List>
);

// Required Document Components
const RequiredDocumentList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="productId" label="Product ID" />
            <TextField source="documentName" label="Document Name" />
        </Datagrid>
    </List>
);

// Demand Report Components
const DemandReportCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="userEmail" label="User Email" />
            <TextInput source="offerDate" label="Offer Date" />
            <TextInput source="userCategory" label="User Category" />
            <DateInput source="queryDate" label="Query Date" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);

// Location Components
const LocationList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);

const App = () => {
    return (
        <Admin
            dataProvider={dataProvider}
            authProvider={authProvider}
        >
            <Resource
                name="products"
                list={ProductList}
                edit={ProductEdit}
                create={ProductCreate}
                icon={ProductIcon}
            />
            <Resource
                name="productOwners"
                list={ProductOwnerList}
                icon={PeopleIcon}
            />
            <Resource
                name="requiredDocuments"
                list={RequiredDocumentList}
                icon={DescriptionIcon}
            />
            <Resource
                name="demandReports"
                create={DemandReportCreate}
                icon={ReportIcon}
            />
            <Resource
                name="locations"
                list={LocationList}
                icon={LocationOnIcon}
            />
        </Admin>
    );
};

export default App;