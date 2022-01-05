"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceEntity = void 0;
const typeorm_1 = require("typeorm");
let InvoiceEntity = class InvoiceEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InvoiceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], InvoiceEntity.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], InvoiceEntity.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100 }),
    __metadata("design:type", String)
], InvoiceEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 20 }),
    __metadata("design:type", String)
], InvoiceEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 20 }),
    __metadata("design:type", String)
], InvoiceEntity.prototype, "company_name", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], InvoiceEntity.prototype, "effective_date", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 20 }),
    __metadata("design:type", String)
], InvoiceEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bool'),
    __metadata("design:type", Boolean)
], InvoiceEntity.prototype, "primary_al", void 0);
__decorate([
    (0, typeorm_1.Column)('bool'),
    __metadata("design:type", Boolean)
], InvoiceEntity.prototype, "primary_gl", void 0);
__decorate([
    (0, typeorm_1.Column)('bool'),
    __metadata("design:type", Boolean)
], InvoiceEntity.prototype, "primary_el", void 0);
__decorate([
    (0, typeorm_1.Column)('bool'),
    __metadata("design:type", Boolean)
], InvoiceEntity.prototype, "is_deleted", void 0);
InvoiceEntity = __decorate([
    (0, typeorm_1.Entity)('invoice')
], InvoiceEntity);
exports.InvoiceEntity = InvoiceEntity;
//# sourceMappingURL=invoice.entity.js.map