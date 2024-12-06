import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: {email} });
  }

  async createUser(email: string, password: string): Promise<User> {
    const salt = await bcrypt.genSalt();
    const senhaHash = await bcrypt.hash(password, salt);

    const user = this.userRepository.create({ email, password: senhaHash });
    return this.userRepository.save(user);
  }
}
