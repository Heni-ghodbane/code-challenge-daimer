import { Location } from "@tss/common-ctrm";
import { ApiProperty } from '@nestjs/swagger';

export class LocationDto implements Location {
  @ApiProperty({
    description: 'The Name of the center',
  })
  center_name!: string;

  @ApiProperty({
    description: 'Company ID',
  })
  GSSN_COMPANYID!: string;

  @ApiProperty({
    description: 'Outlet Id',
  })
  GSSN_OUTLETID!: string;

  @ApiProperty({
    description: 'Salesdirection Name',
  })
  vd_name: string;
  @ApiProperty({
    description: 'Sales Direction number',
  })
  vfnr: string;

  @ApiProperty(
    {
      description: 'SalesDrid Name',
    }
  )
  vfnr_hb: string;

  @ApiProperty(
    {
      description: 'center mode',
    }
  )
  mode: string;

  @ApiProperty()
  sortorder: string;
  
  @ApiProperty()
  brand: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  shortcut: string;
  @ApiProperty()
  company_name: string;
  @ApiProperty()
  branch: string;
  @ApiProperty()
  street: string;
  @ApiProperty()
  zip: string;
  @ApiProperty()
  place: string;
  @ApiProperty()
  region: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  website: string;
}
