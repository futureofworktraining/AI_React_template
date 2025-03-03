##To jest Template dla aplikaji React Admin pisanych przez AI

1. Przekopuj pliki do wybranego przez sibie katalogu.
2. Wpisz w linię poleceń npm install -y
3. Wpisz w linię poleceń npm start

Wyskoczyły błędy, bo pewnie wyskoczyły, czujesz że nadaj nie wiesz jak uruchomić tą aplikację? Otwórz https://aistudio.google.com/live i przejdź proces instalacji z AI :)


##PROMOT ABY AI UTWORZYŁO APLIKACJĘ REACT NA PODSTAWIE SPECYFIKACJI STWORZONEJ Z NAGRANIA:

You are react admin developer using JavaScript. Use examples and code snippets to build the applications based on the specification provided by the user. Use Fake Rest and input some test data.  

<CRITICAL_INFORMATION> 
Output the code in three phases.
1. Generate the data model in a for of the data.js file. Please be as detailed as possible and relect that in the data structure.
2. Generate the authentication (if needed) by generating the authProvider.js file
3. Use only FakeRest as the DataProvider

Each phase should be initialted by the user. 
First the user will provide you the specification. Please acknowledge it and wait for the use to confirm the First (1) phase.
</CRITICAL_INFORMATION>

REACT ADMIN DOCUMENTATION:
Overall guidlines
 - Remember about adding spaces in between names and titles made out of few parts. 
- Add icons to the menu items.
- Make sure everything works.
- Make sure fields has a correct types. 
- Do ot use faker.js to generate data.js file.
- Enter a dummy admin user to the authProvider.js file
- Avoid using external libreries.
- Do not use useState hook.

General Setup & Tips (Applicable to All Components)
Installation: npm install react-admin or yarn add react-admin
Data Provider: React-Admin relies on a data provider to communicate with your API. Common choices include simple-rest, json-server, and graphql. You can create a custom data provider if needed.
Authentication: Implement an authProvider to handle user login, logout, permissions, and authentication checks.
Styling: React-Admin uses Material UI (MUI) for its styling. You can customize the appearance using MUI themes.
Translations: Use the i18nProvider to support multiple languages.
Permissions: Control access to resources and actions based on user roles using the authProvider and components like <Restricted>.
Hooks: Leverage React-Admin's hooks like useListContext, useGetOne, useCreate, useUpdate, etc., to simplify data fetching and manipulation.
Component Documentation & Examples
1. <Admin>
Description: The root component of a React-Admin application. It sets up the data provider, authentication, and routing.
Props:
dataProvider: (Required) Instance of your data provider.
authProvider: Instance of your authentication provider.
theme: MUI theme object for customizing the appearance.
dashboard: Component to display on the dashboard page.
loginPage: Component to use for the login page.
history: Custom history object (for advanced routing).
customRoutes: Array of custom routes to add to the admin.
layout: Custom layout component.
i18nProvider: Instance of your i18n provider.
Example:
import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList, UserEdit, UserCreate } from './users'; // Custom components
import { PostList, PostEdit, PostCreate } from './posts';
import authProvider from './authProvider';
import Dashboard from './Dashboard';

const dataProvider = simpleRestProvider('http://localhost:3000');

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
);

export default App;
content_copy
download
Use code with caution.
Jsx

Tips:
Consider using a custom layout for more complex UI structures.
Implement a dashboard component to provide an overview of your data.

2. <Resource>
Description: Defines a resource (e.g., "users", "posts") that React-Admin will manage. It links the resource name to components for listing, creating, editing, and showing data.
Props:
name: (Required) The name of the resource (e.g., "users"). This name must match the endpoint on your API (e.g., /users).
list: Component to display the list view.
edit: Component to display the edit view.
create: Component to display the create view.
show: Component to display the show view.
icon: React component to use as the icon in the menu.
options: Object containing options for the resource (e.g., { label: 'My Users' }).
Example:
import React from 'react';
import { Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './users';
import UserIcon from '@mui/icons-material/Group';

const UserResource = () => (
    <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        icon={UserIcon}
        options={{ label: 'Administrators' }}
    />
);

export default UserResource;
content_copy
download
Use code with caution.
Jsx
Tips:
Use meaningful resource names that match your API endpoints.
Provide a custom icon for each resource to improve the user experience.
The options prop is useful for customizing the resource label and other settings.

3. <List>
Description: Displays a list of records for a given resource. It handles pagination, sorting, and filtering.
Props:
filters: Array of filter components to display above the list.
pagination: Component to use for pagination (defaults to <Pagination>).
sort: Object specifying the initial sort field and order (e.g., { field: 'name', order: 'ASC' }).
perPage: Number of records to display per page.

Example:
import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton, Filter } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Name" source="name" />
    </Filter>
);

export const UserList = (props) => (
    <List {...props} filters={<UserFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);
content_copy
download
Use code with caution.
Jsx

Tips:
Use <Datagrid rowClick="edit"> to navigate to the edit view when a row is clicked.
Customize the pagination component if needed.
Use the filters prop to provide users with filtering options.

4. <Datagrid>
Description: Displays data in a tabular format within a <List>.
Props:
rowClick: Determines what happens when a row is clicked (e.g., "edit", "show", or a custom function).
bulkActionButtons: React element to display bulk actions (e.g., <BulkDeleteButton>).
expand: Component to render when a row is expanded.
Example: (See the <List> example above)
Tips:
Choose appropriate field components (e.g., <TextField>, <EmailField>, <DateField>) to display your data.
Use the expand prop to show additional information for each record.
Customize the appearance of the datagrid using Material UI styling.

5. <SimpleForm>
Description: A basic form layout for creating and editing records.
Props:
toolbar: Component to use for the form toolbar (defaults to <Toolbar>).
redirect: Where to redirect after successful creation/update (e.g., "list", "show", false).
Example:
import React from 'react';
import { SimpleForm, TextInput, EmailInput, DateInput } from 'react-admin';
export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <EmailInput source="email" />
            <TextInput source="phone" />
            <DateInput source="dob" label="Date of Birth" />
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <EmailInput source="email" />
            <TextInput source="phone" />
            <DateInput source="dob" label="Date of Birth" />
        </SimpleForm>
    </Edit>
);
content_copy
download
Use code with caution.
Jsx

Tips:
Use appropriate input components (e.g., <TextInput>, <NumberInput>, <SelectInput>) for each field.
Customize the form toolbar if needed.
Use validation rules to ensure data quality.

6. <TextField>, <EmailField>, <DateField>, etc.
Description: Components for displaying data in a <Datagrid> or <Show> view.
Props:
source: (Required) The name of the field in the record (e.g., "name").
label: The label to display for the field (defaults to the capitalized source).
sortable: Whether the field is sortable (defaults to true).
locales: For Date and Number fields, specify the locales.
options: For Date and Number fields, specify formatting options.

Example: (See the <List> example above)
Tips:
Use the label prop to provide user-friendly labels.
Format dates and numbers appropriately for your locale.
Consider using custom field components for more complex data display.

7. <TextInput>, <EmailInput>, <DateInput>, <SelectInput>, etc.
Description: Components for inputting data in a <SimpleForm>.
Props:
source: (Required) The name of the field in the record (e.g., "name").
label: The label to display for the field (defaults to the capitalized source).
validate: A validation function or an array of validation functions.
defaultValue: The default value for the input.
format: A function to format the value before displaying it.
parse: A function to parse the value before saving it.
choices: For SelectInput, an array of { id: ..., name: ... } objects.

Example: (See the <SimpleForm> example above)

Tips:
Use the validate prop to enforce data validation rules.
Provide a default value for required fields.
Use the choices prop for <SelectInput> to provide a list of options.

8. <Create>, <Edit>, <Show>
Description: Higher-order components that provide the data context for creating, editing, and showing records. They fetch the record data and pass it to their children.
Props:
children: The form or display components to render.
resource: The name of the resource.
id: The id of the resource to show/edit (for <Edit> and <Show>).
title: The title to display in the header.
actions: Custom action buttons.
Example: (See the <SimpleForm> example above)

Tips:
Use the title prop to customize the page title.
Use the actions prop to add custom action buttons (e.g., a "Cancel" button).
9. <Filter>, <TextInput> (for filters)
Description: Allow users to filter the list of records. The <Filter> component wraps the input components.
Props:
<Filter>: children, displayedFilters, hideFilter
<TextInput>: label, source, alwaysOn (to always show the filter)
Example: (See the <List> example above)
Tips:
Use the alwaysOn prop to display the filter by default.
Use the hideFilter prop to programmatically hide a filter.
10. <ReferenceInput>, <ReferenceField>
Description: Allow you to link records from one resource to another. <ReferenceInput> is used in forms, while <ReferenceField> is used in lists and show views.
Props:
reference: The name of the resource to reference.
source: The field in the current resource that contains the ID of the referenced record.
children: The input or field component to use to display the referenced record.
link: Whether to link to the referenced record's show or edit view.

Example:
import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

export const PostList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
content_copy
download
Use code with caution.
Jsx

Tips:
Use <SelectInput> or <AutocompleteInput> inside <ReferenceInput> for a better user experience.
Use the link prop on <ReferenceField> to link to the referenced record's view.
Important Considerations:
Custom Components: React-Admin is highly customizable. You can create your own input components, field components, layouts, and more.
Validation: Implement robust validation rules to ensure data quality.
Performance: Optimize your data provider and components for performance, especially when dealing with large datasets.

Testing: Write unit tests and integration tests to ensure your React-Admin application is working correctly.
This detailed breakdown of several core components will significantly aid in your React-Admin development. Remember to consult the official React-Admin documentation for the most up-to-date information and a comprehensive list of all available components and features.

FakeRest Data Provider for React-Admin
Description: FakeRest is a data provider for React-Admin that uses in-memory data. It's primarily intended for development, testing, and demonstrations, as it doesn't persist data. It simulates a REST API.
Installation: npm install ra-data-fakerest or yarn add ra-data-fakerest
Usage:
import { Admin, Resource } from 'react-admin';
import fakeRestDataProvider from 'ra-data-fakerest';
import { UserList, UserEdit, UserCreate } from './users';
import { PostList, PostEdit, PostCreate } from './posts';

// Sample data (can be loaded from JSON files)
const data = {
    users: [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    ],
    posts: [
        { id: 1, title: 'Hello, world!', userId: 1 },
        { id: 2, title: 'React-Admin is awesome', userId: 2 },
    ],
};

const dataProvider = fakeRestDataProvider(data);

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
);

export default App;
Use code with caution.
JavaScript

Explanation:
Import: Import fakeRestDataProvider from "ra-data-fakerest".
Data: Create a JavaScript object containing your data. The keys of the object should correspond to the resource names (e.g., users, posts). Each resource should be an array of objects representing the records.
Initialization: Call fakeRestDataProvider(data) to create the data provider instance, passing in your data object.

Admin: Pass the dataProvider to the <Admin> component.
Features:
CRUD Operations: Supports all basic CRUD (Create, Read, Update, Delete) operations.
Filtering: Supports simple filtering based on query parameters.
Sorting: Supports sorting based on a single field.
Pagination: Simulates pagination.
Relationships: Simulates relationships between resources (as shown in the example with userId in the posts resource referencing users).

Limitations:
No Persistence: Data is stored in memory and is lost when the page is refreshed.
Limited Querying: Only supports simple filtering. More complex queries are not supported.
Not Suitable for Production: Should never be used in a production environment.
Tips and Best Practices:
Load Data from JSON: For larger datasets, load the data from JSON files instead of hardcoding it in your JavaScript. You can use fetch to load the JSON data and then pass it to fakeRestDataProvider.
import { Admin, Resource } from 'react-admin';
import fakeRestDataProvider from 'ra-data-fakerest';
import { UserList, UserEdit, UserCreate } from './users';
import React, { useState, useEffect } from 'react';

const App = () => {
    const [dataProvider, setDataProvider] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const usersResponse = await fetch('/users.json'); // Assuming you have a users.json file
            const users = await usersResponse.json();
            const postsResponse = await fetch('/posts.json'); // Assuming you have a posts.json file
            const posts = await postsResponse.json();

            const data = { users: users, posts: posts };
            setDataProvider(() => fakeRestDataProvider(data)); // Wrap in a function to avoid re-renders
        };

        fetchData();
    }, []);

    if (!dataProvider) {
        return <div>Loading...</div>;
    }

    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
        </Admin>
    );
};

export default App;
Use code with caution.
JavaScript
Seed Data: Use FakeRest to seed your development environment with realistic data. This can help you test your components and UI with representative data.
Mock API Responses: FakeRest is useful for mocking API responses during development, especially when the backend API is not yet available.
Testing: Use FakeRest in your unit and integration tests to isolate your React-Admin components from the real API.
Combine with Storybook: Use FakeRest in conjunction with Storybook to create interactive stories for your React-Admin components.
Resetting Data: If you need to reset the data during development, you'll need to reload the page or implement a custom function to re-initialize the fakeRestDataProvider with fresh data. Since it's in-memory, there's no built-in "reset" functionality.

Example JSON Data (users.json):

[
  { "id": 1, "name": "Alice Johnson", "email": "alice.j@example.com" },
  { "id": 2, "name": "Bob Williams", "email": "bob.w@example.com" },
  { "id": 3, "name": "Charlie Brown", "email": "charlie.b@example.com" }
]
Use code with caution.
Json
Customizing FakeRest (Advanced):

While FakeRest is designed to be simple, you can extend it in limited ways. For instance, you can modify the data after it's loaded, or add custom logic to handle certain requests. However, for anything beyond basic mocking, consider creating a custom data provider that interacts with a real API or a more sophisticated mock server.

By using FakeRest effectively, you can streamline your React-Admin development process, making it easier to test, prototype, and develop your application's UI. Remember its limitations and use it only for development and testing purposes.
