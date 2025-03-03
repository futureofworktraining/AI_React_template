// data.js

export const products = [
    {
        id: 'CRD-2023-1001',
        offeredFrom: '2023-07-10',
        locationId: 'birmingham',
        status: 'active',
        name: 'Credit Builder Loan',
        description: 'A loan designed to help build or improve your credit score.',
        interestRate: 0.12,
        maxLoanAmount: 5000
    },
    {
        id: 'CRD-2023-1002',
        offeredFrom: '2023-09-15',
        locationId: 'london',
        status: 'inactive',
        name: 'Home Improvement Loan',
        description: 'Finance your home renovations and upgrades.',
        interestRate: 0.08,
        maxLoanAmount: 25000
    },
    {
        id: 'CRD-2024-1003',
        offeredFrom: '2024-01-20',
        locationId: 'manchester',
        status: 'active',
        name: 'Debt Consolidation Loan',
        description: 'Combine multiple debts into a single, manageable loan.',
        interestRate: 0.06,
        maxLoanAmount: 30000
    },
    {
        id: 'CRD-2024-1004',
        offeredFrom: '2024-03-01',
        locationId: 'birmingham',
        status: 'active',
        name: 'Personal Loan',
        description: 'A flexible loan for various personal needs.',
        interestRate: 0.09,
        maxLoanAmount: 10000
    },
    {
        id: 'CRD-2024-1005',
        offeredFrom: '2024-04-12',
        locationId: 'london',
        status: 'inactive',
        name: 'Car Loan',
        description: 'Finance the purchase of a new or used vehicle.',
        interestRate: 0.07,
        maxLoanAmount: 40000
    },
];

export const productOwners = [
    {
        id: 1,
        productId: 'CRD-2023-1001',
        type: 'Individual',
        role: 'Relationship Manager',
        name: 'John',
        surname: 'Doe',
        phone: '07700 900123',
        email: 'john.doe@example.com',
        address: '123 Main St, Birmingham',
        city: 'Birmingham',
        country: 'UK',
        startDate: '2022-05-15',
        endDate: null,
        notes: 'Primary contact for all credit builder loan inquiries.'
    },
    {
        id: 2,
        productId: 'CRD-2023-1002',
        type: 'Company',
        role: 'Head of Lending',
        name: 'Jane',
        surname: 'Smith',
        phone: '020 7946 0823',
        email: 'jane.smith@example.com',
        address: '456 Oak Ave, London',
        city: 'London',
        country: 'UK',
        startDate: '2021-11-01',
        endDate: null,
        notes: 'Oversees all lending operations for home improvement loans.'
    },
    {
        id: 3,
        productId: 'CRD-2024-1003',
        type: 'Individual',
        role: 'Credit Analyst',
        name: 'Alice',
        surname: 'Johnson',
        phone: '0161 496 0538',
        email: 'alice.j@example.com',
        address: '789 Pine Ln, Manchester',
        city: 'Manchester',
        country: 'UK',
        startDate: '2023-02-20',
        endDate: null,
        notes: 'Responsible for analyzing credit risk for debt consolidation loans.'
    },
     {
        id: 4,
        productId: 'CRD-2024-1004',
        type: 'Individual',
        role: 'Account Manager',
        name: 'Bob',
        surname: 'Williams',
        phone: '07800 800456',
        email: 'bob.w@example.com',
        address: '101 Elm Rd, Birmingham',
        city: 'Birmingham',
        country: 'UK',
        startDate: '2023-09-01',
        endDate: null,
        notes: 'Manages personal loan accounts and customer relationships.'
    },
    {
        id: 5,
        productId: 'CRD-2024-1005',
        type: 'Company',
        role: 'Loan Officer',
        name: 'Charlie',
        surname: 'Brown',
        phone: '020 8742 0975',
        email: 'charlie.b@example.com',
        address: '222 Maple Dr, London',
        city: 'London',
        country: 'UK',
        startDate: '2022-12-10',
        endDate: null,
        notes: 'Processes car loan applications and manages loan disbursements.'
    },
];

export const requiredDocuments = [
    { id: 1, productId: 'CRD-2023-1001', documentName: 'Proof of Identity (e.g., Passport, Driver\'s License)' },
    { id: 2, productId: 'CRD-2023-1001', documentName: 'Proof of Address (e.g., Utility Bill, Bank Statement)' },
    { id: 3, productId: 'CRD-2023-1002', documentName: 'Homeownership Documents (e.g., Mortgage Statement, Property Deed)' },
    { id: 4, productId: 'CRD-2023-1002', documentName: 'Renovation Quotes/Estimates' },
    { id: 5, productId: 'CRD-2024-1003', documentName: 'List of Debts and Balances' },
    { id: 6, productId: 'CRD-2024-1003', documentName: 'Credit Report' },
    { id: 7, productId: 'CRD-2024-1004', documentName: 'Employment Verification' },
    { id: 8, productId: 'CRD-2024-1004', documentName: 'Bank Statements (last 3 months)' },
    { id: 9, productId: 'CRD-2024-1005', documentName: 'Vehicle Purchase Agreement' },
    { id: 10, productId: 'CRD-2024-1005', documentName: 'Vehicle Insurance Information' },
];

export const locations = [
    { id: 'birmingham', name: 'Birmingham' },
    { id: 'london', name: 'London' },
    { id: 'manchester', name: 'Manchester' },
];

export const users = [
    { id: 1, username: 'admin', password: 'password' },
];

export const demandReports = [];