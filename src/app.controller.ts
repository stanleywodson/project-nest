import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}
  @Get()
  async getHello() {
    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: 'capitao',
        name: 'Stanley Wodson',
        function: 'Desenvolvedor',
      },
    });
    return {
      member,
    };
  }
}
