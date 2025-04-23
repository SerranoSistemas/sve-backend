import { faker } from "@faker-js/faker";

export const TagGenerator = () => `${faker.airline.recordLocator()}.PV`;

export const ClientNameGenerator = () => faker.company.name();

export const ProductDescGenerator = () => faker.commerce.productName();

export const DemonstrativoGenerator = () => faker.number.int({ min: 10000, max: 80000 });

export const CentroGenerator = () => faker.commerce.department();

export const IdentificadorGenerator = () => faker.finance.accountNumber();

export const PlantaCodigoGenerator = () => faker.number.int({ min: 100, max: 400 });

export const PlantaDescGenerator = () => faker.commerce.department();

export const AreaCodigoGenerator = () => faker.number.int({ min: 100, max: 400 });

export const AreaDescGenerator = () => faker.commerce.productMaterial();

export const EstacaoMedicaoCodigoGenerator = () => faker.number.int({ min: 100, max: 400 });

export const EstacaoMedicaoDescGenerator = () => faker.airline.recordLocator({ allowVisuallySimilarCharacters: true });

export const MedidorDescGenerator = () => faker.commerce.productDescription();

export const TransacaoGenerator = () => faker.string.fromCharacters('TWQVZXP', 4)

export const DepositoGenerator = () => faker.string.fromCharacters('ACMP', 3)