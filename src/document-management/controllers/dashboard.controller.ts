import { Controller, Get, Query, Render } from '@nestjs/common';

@Controller({
  path: 'dashboard',
})
export class DashboardController {
  constructor() {}

  @Render('dashboard')
  @Get()
  public renderDashboard(@Query('isUploaded') isUploaded = false) {
    if (isUploaded) return { isSubmitRedirect: true };
  }
}
