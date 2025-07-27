const propertySelect = document.getElementById('property');
const newPropertyBtn = document.getElementById('new-property');
const saveBtn = document.getElementById('save');
const exportBtn = document.getElementById('exportExcel');
const addRepairBtn = document.getElementById('addRepair');
const repairsTableBody = document.querySelector('#repairsTable tbody');
const profitRow = document.getElementById('profitRow');
const tabs = document.querySelectorAll('#tabs .tab');
const sections = document.querySelectorAll('.tab-section');
const darkToggle = document.getElementById('dark-toggle');
const languageSelect = document.getElementById('language');

const translations = {
    es: {
        title: 'Gestión de Propiedades',
        propertyLabel: 'Propiedad:',
        newProperty: 'Nueva Propiedad',
        'tab-general': 'Generales',
        'tab-contract': 'Contrato',
        'tab-supplies': 'Suministros',
        'tab-community': 'Comunidad',
        'tab-insurance': 'Seguros',
        'tab-repairs': 'Reparaciones',
        'tab-profitability': 'Rentabilidad',
        generalSection: 'Datos Generales',
        address: 'Dirección',
        catastro: 'Referencia Catastral',
        acquisitionDate: 'Fecha de Adquisición',
        purchasePrice: 'Precio de Compra',
        rooms: 'Número de Habitaciones',
        description: 'Descripción',
        floorPlan: 'Plano (URL de la imagen)',
        observations: 'ITE/Observaciones',
        contractSection: 'Contrato de Alquiler',
        tenantName: 'Inquilino',
        tenantId: 'DNI/NIE',
        tenantContact: 'Contacto',
        contractStart: 'Inicio',
        contractEnd: 'Fin',
        monthlyRent: 'Renta Mensual',
        paymentMethod: 'Forma de Pago',
        deposit: 'Fianza',
        annualUpdates: 'Actualizaciones',
        suppliesSection: 'Suministros',
        electricity: 'Electricidad',
        water: 'Agua',
        waste: 'Basuras',
        gas: 'Gas',
        company: 'Compañía',
        holder: 'Titular',
        contractNumber: 'Nº Contrato',
        startDate: 'Fecha Alta',
        monthlyCost: 'Coste Mensual',
        wasteFee: 'Tasa Municipal',
        wasteFrequency: 'Frecuencia de Pago',
        communitySection: 'Comunidad de Propietarios',
        communityFee: 'Cuota',
        communityManager: 'Administrador',
        communityContact: 'Contacto',
        communityMinutes: 'Últimas Actas',
        insuranceSection: 'Seguros',
        insuranceCompany: 'Compañía',
        insurancePolicy: 'Póliza',
        insuranceCoverage: 'Coberturas',
        insurancePremium: 'Seguro Hogar',
        tenantInsurance: 'Seguro Inquilino',
        ibi: 'IBI',
        insuranceRenewal: 'Renovación',
        repairsSection: 'Historial de Reparaciones',
        repairsAdd: 'Añadir Reparación',
        date: 'Fecha',
        cost: 'Coste',
        warranty: 'Garantía',
        repairDate: 'Fecha',
        repairCompany: 'Empresa',
        repairDesc: 'Descripción',
        repairCost: 'Coste',
        repairWarranty: 'Garantía',
        addRepairButton: 'Añadir',
        profitabilitySection: 'Rentabilidad Anual',
        income: 'Ingresos',
        expenses: 'Gastos',
        benefit: 'Beneficio',
        profitability: 'Rentabilidad (%)',
        save: 'Guardar',
        exportExcel: 'Exportar a Excel',
        footer: 'Datos almacenados en localStorage del navegador'
    },
    en: {
        title: 'Property Management',
        propertyLabel: 'Property:',
        newProperty: 'New Property',
        'tab-general': 'General',
        'tab-contract': 'Contract',
        'tab-supplies': 'Supplies',
        'tab-community': 'Community',
        'tab-insurance': 'Insurance',
        'tab-repairs': 'Repairs',
        'tab-profitability': 'Profitability',
        generalSection: 'General Data',
        address: 'Address',
        catastro: 'Land Registry',
        acquisitionDate: 'Acquisition Date',
        purchasePrice: 'Purchase Price',
        rooms: 'Rooms',
        description: 'Description',
        floorPlan: 'Floor Plan (image URL)',
        observations: 'ITE/Observations',
        contractSection: 'Rental Contract',
        tenantName: 'Tenant',
        tenantId: 'ID',
        tenantContact: 'Contact',
        contractStart: 'Start',
        contractEnd: 'End',
        monthlyRent: 'Monthly Rent',
        paymentMethod: 'Payment Method',
        deposit: 'Deposit',
        annualUpdates: 'Updates',
        suppliesSection: 'Supplies',
        electricity: 'Electricity',
        water: 'Water',
        waste: 'Waste',
        gas: 'Gas',
        company: 'Company',
        holder: 'Holder',
        contractNumber: 'Contract No.',
        startDate: 'Start Date',
        monthlyCost: 'Monthly Cost',
        wasteFee: 'Municipal Fee',
        wasteFrequency: 'Payment Frequency',
        communitySection: 'Homeowners Association',
        communityFee: 'Fee',
        communityManager: 'Manager',
        communityContact: 'Contact',
        communityMinutes: 'Last Minutes',
        insuranceSection: 'Insurance',
        insuranceCompany: 'Company',
        insurancePolicy: 'Policy',
        insuranceCoverage: 'Coverage',
        insurancePremium: 'Home Insurance',
        tenantInsurance: 'Tenant Insurance',
        ibi: 'Property Tax',
        insuranceRenewal: 'Renewal',
        repairsSection: 'Repairs History',
        repairsAdd: 'Add Repair',
        date: 'Date',
        cost: 'Cost',
        warranty: 'Warranty',
        repairDate: 'Date',
        repairCompany: 'Company',
        repairDesc: 'Description',
        repairCost: 'Cost',
        repairWarranty: 'Warranty',
        addRepairButton: 'Add',
        profitabilitySection: 'Annual Profitability',
        income: 'Income',
        expenses: 'Expenses',
        benefit: 'Profit',
        profitability: 'Profitability (%)',
        save: 'Save',
        exportExcel: 'Export to Excel',
        footer: 'Data stored in browser localStorage'
    }
};

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        let text = translations[lang][key];
        if (text) {
            if (el.tagName.toLowerCase() === 'label') {
                el.childNodes[0].nodeValue = text;
            } else {
                el.textContent = text;
            }
        }
    });
    document.documentElement.lang = lang;
}

let properties = JSON.parse(localStorage.getItem('properties') || '{}');
let current = null;

function populateSelect() {
    propertySelect.innerHTML = '';
    for (const key of Object.keys(properties)) {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = key;
        propertySelect.appendChild(opt);
    }
}

function clearForm() {
    document.querySelectorAll('input, textarea').forEach(el => el.value = '');
    repairsTableBody.innerHTML = '';
    profitRow.innerHTML = '';
}

function fillForm(data) {
    document.getElementById('address').value = data.general.address || '';
    document.getElementById('catastro').value = data.general.catastro || '';
    document.getElementById('acquisitionDate').value = data.general.acquisitionDate || '';
    document.getElementById('purchasePrice').value = data.general.purchasePrice || '';
    document.getElementById('rooms').value = data.general.rooms || '';
    document.getElementById('description').value = data.general.description || '';
    document.getElementById('floorPlan').value = data.general.floorPlan || '';
    document.getElementById('observations').value = data.general.observations || '';

    const c = data.contract;
    document.getElementById('tenantName').value = c.tenantName || '';
    document.getElementById('tenantId').value = c.tenantId || '';
    document.getElementById('tenantContact').value = c.tenantContact || '';
    document.getElementById('contractStart').value = c.start || '';
    document.getElementById('contractEnd').value = c.end || '';
    document.getElementById('monthlyRent').value = c.rent || '';
    document.getElementById('paymentMethod').value = c.payment || '';
    document.getElementById('deposit').value = c.deposit || '';
    document.getElementById('annualUpdates').value = c.updates || '';

    const s = data.supplies;
    document.getElementById('electricCompany').value = s.electric.company || '';
    document.getElementById('electricHolder').value = s.electric.holder || '';
    document.getElementById('electricContract').value = s.electric.contract || '';
    document.getElementById('electricDate').value = s.electric.date || '';
    document.getElementById('electricCost').value = s.electric.cost || '';

    document.getElementById('waterCompany').value = s.water.company || '';
    document.getElementById('waterHolder').value = s.water.holder || '';
    document.getElementById('waterContract').value = s.water.contract || '';
    document.getElementById('waterDate').value = s.water.date || '';
    document.getElementById('waterCost').value = s.water.cost || '';

    document.getElementById('wasteFee').value = s.waste.fee || '';
    document.getElementById('wasteFrequency').value = s.waste.frequency || '';

    document.getElementById('gasCompany').value = s.gas.company || '';
    document.getElementById('gasHolder').value = s.gas.holder || '';
    document.getElementById('gasContract').value = s.gas.contract || '';
    document.getElementById('gasDate').value = s.gas.date || '';
    document.getElementById('gasCost').value = s.gas.cost || '';

    const m = data.community;
    document.getElementById('communityFee').value = m.fee || '';
    document.getElementById('ibi').value = m.ibi || '';
    document.getElementById('communityManager').value = m.manager || '';
    document.getElementById('communityContact').value = m.contact || '';
    document.getElementById('communityMinutes').value = m.minutes || '';

    const ins = data.insurance;
    document.getElementById('insuranceCompany').value = ins.company || '';
    document.getElementById('insurancePolicy').value = ins.policy || '';
    document.getElementById('insuranceCoverage').value = ins.coverage || '';
    document.getElementById('insurancePremium').value = ins.premium || '';
    document.getElementById('tenantInsurance').value = ins.tenantPremium || '';
    document.getElementById('insuranceRenewal').value = ins.renewal || '';

    repairsTableBody.innerHTML = '';
    for (const r of data.repairs) {
        addRepairRow(r);
    }
    updateProfit();
}

function grabForm() {
    return {
        general: {
            address: document.getElementById('address').value,
            catastro: document.getElementById('catastro').value,
            acquisitionDate: document.getElementById('acquisitionDate').value,
            purchasePrice: parseFloat(document.getElementById('purchasePrice').value) || 0,
            rooms: document.getElementById('rooms').value,
            description: document.getElementById('description').value,
            floorPlan: document.getElementById('floorPlan').value,
            observations: document.getElementById('observations').value,
        },
        contract: {
            tenantName: document.getElementById('tenantName').value,
            tenantId: document.getElementById('tenantId').value,
            tenantContact: document.getElementById('tenantContact').value,
            start: document.getElementById('contractStart').value,
            end: document.getElementById('contractEnd').value,
            rent: parseFloat(document.getElementById('monthlyRent').value) || 0,
            payment: document.getElementById('paymentMethod').value,
            deposit: parseFloat(document.getElementById('deposit').value) || 0,
            updates: document.getElementById('annualUpdates').value,
        },
        supplies: {
            electric: {
                company: document.getElementById('electricCompany').value,
                holder: document.getElementById('electricHolder').value,
                contract: document.getElementById('electricContract').value,
                date: document.getElementById('electricDate').value,
                cost: parseFloat(document.getElementById('electricCost').value) || 0,
            },
            water: {
                company: document.getElementById('waterCompany').value,
                holder: document.getElementById('waterHolder').value,
                contract: document.getElementById('waterContract').value,
                date: document.getElementById('waterDate').value,
                cost: parseFloat(document.getElementById('waterCost').value) || 0,
            },
            waste: {
                fee: parseFloat(document.getElementById('wasteFee').value) || 0,
                frequency: document.getElementById('wasteFrequency').value,
            },
            gas: {
                company: document.getElementById('gasCompany').value,
                holder: document.getElementById('gasHolder').value,
                contract: document.getElementById('gasContract').value,
                date: document.getElementById('gasDate').value,
                cost: parseFloat(document.getElementById('gasCost').value) || 0,
            },
        },
        community: {
            fee: parseFloat(document.getElementById('communityFee').value) || 0,
            ibi: parseFloat(document.getElementById('ibi').value) || 0,
            manager: document.getElementById('communityManager').value,
            contact: document.getElementById('communityContact').value,
            minutes: document.getElementById('communityMinutes').value,
        },
        insurance: {
            company: document.getElementById('insuranceCompany').value,
            policy: document.getElementById('insurancePolicy').value,
            coverage: document.getElementById('insuranceCoverage').value,
            premium: parseFloat(document.getElementById('insurancePremium').value) || 0,
            tenantPremium: parseFloat(document.getElementById('tenantInsurance').value) || 0,
            renewal: document.getElementById('insuranceRenewal').value,
        },
        repairs: Array.from(repairsTableBody.children).map(row => ({
            date: row.children[0].textContent,
            company: row.children[1].textContent,
            description: row.children[2].textContent,
            cost: parseFloat(row.children[3].textContent) || 0,
            warranty: row.children[4].textContent,
        })),
    };
}

function addRepairRow(r) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${r.date}</td><td>${r.company}</td><td>${r.description}</td><td>${r.cost}</td><td>${r.warranty}</td>`;
    repairsTableBody.appendChild(tr);
}

function computeProfit(data) {
    const income = data.contract.rent * 12;
    const expenses =
        data.insurance.premium +
        (data.insurance.tenantPremium || 0) +
        (data.community.ibi || 0) +
        data.community.fee * 12;
    const profit = income - expenses;
    const returnPct = data.general.purchasePrice ? (profit / data.general.purchasePrice * 100) : 0;
    return { income, expenses, profit, returnPct };
}

function updateProfit() {
    if (!current) return;
    const data = grabForm();
    const p = computeProfit(data);
    profitRow.innerHTML = `<td>${p.income.toFixed(2)}</td><td>${p.expenses.toFixed(2)}</td><td>${p.profit.toFixed(2)}</td><td>${p.returnPct.toFixed(2)}</td>`;
}

function generateExcel(data) {
    const wb = XLSX.utils.book_new();

    const generalSheet = XLSX.utils.aoa_to_sheet([
        ['Dirección', data.general.address],
        ['Referencia Catastral', data.general.catastro],
        ['Fecha de Adquisición', data.general.acquisitionDate],
        ['Precio de Compra', data.general.purchasePrice],
        ['Número de Habitaciones', data.general.rooms],
        ['Descripción', data.general.description],
        ['Plano', data.general.floorPlan],
        ['ITE/Observaciones', data.general.observations],
    ]);
    XLSX.utils.book_append_sheet(wb, generalSheet, 'Generales');

    const contractSheet = XLSX.utils.aoa_to_sheet([
        ['Inquilino', data.contract.tenantName],
        ['DNI/NIE', data.contract.tenantId],
        ['Contacto', data.contract.tenantContact],
        ['Inicio', data.contract.start],
        ['Fin', data.contract.end],
        ['Renta Mensual', data.contract.rent],
        ['Forma de Pago', data.contract.payment],
        ['Fianza', data.contract.deposit],
        ['Actualizaciones', data.contract.updates],
    ]);
    XLSX.utils.book_append_sheet(wb, contractSheet, 'Contrato');

    const s = data.supplies;
    const suppliesSheet = XLSX.utils.aoa_to_sheet([
        ['Electricidad'],
        ['Compañía', s.electric.company],
        ['Titular', s.electric.holder],
        ['Nº Contrato', s.electric.contract],
        ['Fecha Alta', s.electric.date],
        ['Coste Mensual', s.electric.cost],
        [],
        ['Agua'],
        ['Compañía', s.water.company],
        ['Titular', s.water.holder],
        ['Nº Contrato', s.water.contract],
        ['Fecha Alta', s.water.date],
        ['Coste Mensual', s.water.cost],
        [],
        ['Basuras'],
        ['Tasa Municipal', s.waste.fee],
        ['Frecuencia de Pago', s.waste.frequency],
        [],
        ['Gas'],
        ['Compañía', s.gas.company],
        ['Titular', s.gas.holder],
        ['Nº Contrato', s.gas.contract],
        ['Fecha Alta', s.gas.date],
        ['Coste Mensual', s.gas.cost],
    ]);
    XLSX.utils.book_append_sheet(wb, suppliesSheet, 'Suministros');

    const communitySheet = XLSX.utils.aoa_to_sheet([
        ['Cuota', data.community.fee],
        ['IBI', data.community.ibi],
        ['Administrador', data.community.manager],
        ['Contacto', data.community.contact],
        ['Últimas Actas', data.community.minutes],
    ]);
    XLSX.utils.book_append_sheet(wb, communitySheet, 'Comunidad');

    const insuranceSheet = XLSX.utils.aoa_to_sheet([
        ['Compañía', data.insurance.company],
        ['Póliza', data.insurance.policy],
        ['Coberturas', data.insurance.coverage],
        ['Seguro Hogar', data.insurance.premium],
        ['Seguro Inquilino', data.insurance.tenantPremium],
        ['Renovación', data.insurance.renewal],
    ]);
    XLSX.utils.book_append_sheet(wb, insuranceSheet, 'Seguros');

    const repairsData = [
        ['Fecha', 'Empresa', 'Descripción', 'Coste', 'Garantía'],
        ...data.repairs.map(r => [r.date, r.company, r.description, r.cost, r.warranty])
    ];
    const repairsSheet = XLSX.utils.aoa_to_sheet(repairsData);
    XLSX.utils.book_append_sheet(wb, repairsSheet, 'Reparaciones');

    const p = computeProfit(data);
    const profitabilitySheet = XLSX.utils.aoa_to_sheet([
        ['Ingresos', 'Gastos', 'Beneficio', 'Rentabilidad (%)'],
        [p.income, p.expenses, p.profit, p.returnPct]
    ]);
    XLSX.utils.book_append_sheet(wb, profitabilitySheet, 'Rentabilidad');

    XLSX.writeFile(wb, `${current}.xlsx`);
}

propertySelect.addEventListener('change', () => {
    const key = propertySelect.value;
    current = key;
    if (properties[key]) {
        fillForm(properties[key]);
    } else {
        clearForm();
    }
});

newPropertyBtn.addEventListener('click', () => {
    const name = prompt('Nombre de la nueva propiedad');
    if (name) {
        properties[name] = getEmptyProperty();
        populateSelect();
        propertySelect.value = name;
        propertySelect.dispatchEvent(new Event('change'));
    }
});

saveBtn.addEventListener('click', () => {
    if (!current) {
        alert('Seleccione una propiedad');
        return;
    }
    properties[current] = grabForm();
    localStorage.setItem('properties', JSON.stringify(properties));
    updateProfit();
    alert('Guardado');
});

exportBtn.addEventListener('click', () => {
    if (!current) {
        alert('Seleccione una propiedad');
        return;
    }
    const data = grabForm();
    generateExcel(data);
});

addRepairBtn.addEventListener('click', () => {
    const r = {
        date: document.getElementById('repairDate').value,
        company: document.getElementById('repairCompany').value,
        description: document.getElementById('repairDesc').value,
        cost: parseFloat(document.getElementById('repairCost').value) || 0,
        warranty: document.getElementById('repairWarranty').value,
    };
    addRepairRow(r);
    updateProfit();
});

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        sections.forEach(s => s.classList.remove("active"));
        const target = document.getElementById(tab.dataset.target);
        if (target) target.classList.add("active");
    });
});

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

languageSelect.addEventListener('change', () => {
    applyTranslations(languageSelect.value);
});


function getEmptyProperty() {
    return {
        general: {},
        contract: {},
        supplies: { electric: {}, water: {}, waste: {}, gas: {} },
        community: {},
        insurance: {},
        repairs: [],
    };
}

function init() {
    if (Object.keys(properties).length === 0) {
        properties['Piso 1'] = getEmptyProperty();
        properties['Piso 2'] = getEmptyProperty();
        properties['Piso 3'] = getEmptyProperty();
        properties['Local'] = getEmptyProperty();
    }
    populateSelect();
    propertySelect.selectedIndex = 0;
    propertySelect.dispatchEvent(new Event('change'));
    applyTranslations(languageSelect.value);
}

init();

