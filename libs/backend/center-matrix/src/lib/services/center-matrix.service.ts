import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Location as ILocation } from '@tss/common-ctrm';
import { Location } from '../location.entity';

@Injectable()
export class CenterMatrixService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepo: Repository<Location>
  ) {}

  async count() {
    return await this.locationRepo.count();
  }

  async getLocations() {
    const count = await this.count();
    console.log(typeof count, 'countytpe');
    if (count === 0) {
      console.log('no locations');
      const loctions = await this.mockLocations();
      return loctions;
    }
    return await this.locationRepo.find();
  }
  async update(id: number, values) {
    return await this.locationRepo.update(id, values);
  }
  async findOne(id) {
    return await this.locationRepo.findOne(id);
  }
  async remove(id) {
    return await this.locationRepo.delete(id);
  }
 async insert(values: ILocation) {
   return await this.locationRepo.insert(values);
 }
  private async mockLocations(){
    const vds = ['Berlin', 'Nord'];
    vds.forEach(async (vd) => {
      for( let i = 0; i <= 5; i++) {
        const ndl = `Niederlassung ${faker.address.city()}`;
        for( let i = 0; i <= faker.datatype.number({min: 10, max: 99}); i++) {
          await this.locationRepo.insert(this.location(vd, ndl));
        }
      }
    })

    return await this.locationRepo.find();
  }
  /**
   *  "GSSN_OUTLETID": "GS0001114",
          "GSSN_COMPANYID": "GC0009056",
          "vd_name": "Berlin",
          "vfnr": "21200",
          "PEP aktiv": "x",
          "vfnr_hb": "21200",
          "mode": "H",
          "sortorder": "1",
          "brand": "MB",
          "status": "NDL",
          "shortcut": "NDL B",
          "company_name": "Mercedes-Benz AG",
          "branch": "Niederlassung Berlin",
          "Centername": "Center Berlin Salzufer",
          "street": "Salzufer 1",
          "zip": "10587",
          "place": "Berlin",
          "region": "Berlin",
          "phone": "+49 (0)30 39010-0",
          "website": "www.mercedes-benz-berlin.de"
   *
   * @param {*} vd
   * @param {*} ndl
   * @return {*}  {Location}
   * @memberof CenterMatrixService
   */
  private location(vd, ndl): any {
    return {
      GSSN_COMPANYID: 'GS'+faker.datatype.string(10),
      GSSN_OUTLETID: 'GS'+ faker.datatype.string(10),
      vd_name: vd,
      vfnr: faker.datatype.number(5).toString(),
      mode: faker.random.arrayElement(['H', 'S']),
      brand: 'MB',
      center_name: `Center ${vd} ${faker.address.cityName()}`,
      branch: ndl,
      company_name: 'Mercedes-Benz AG',
      street: faker.address.streetAddress(),
      zip: faker.address.zipCode(),
      place: vd,
      region: vd,
      phone: faker.phone.phoneNumber('+49 ####-###-####'),
    };
  }
}
