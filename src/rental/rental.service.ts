import { Injectable } from '@nestjs/common';
import { CreateRentalDto } from './dto/create-rental.dto';
import { UpdateRentalDto } from './dto/update-rental.dto';

// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDu3oeBzE6RA58e2T629Nmx2cwlT1NhQhw",
  authDomain: "spot-dfe33.firebaseapp.com",
  projectId: "spot-dfe33",
  storageBucket: "spot-dfe33.appspot.com",
  messagingSenderId: "550574198799",
  appId: "1:550574198799:web:106990b32b3bdaa48d537a",
  measurementId: "G-TCL33DL3WX"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


@Injectable()
export class RentalService {
  create(createRentalDto: CreateRentalDto) {
    return 'This action adds a new rental';
  }

  findAll() {
    database
    return `This action returns all rental`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rental`;
  }

  update(id: number, updateRentalDto: UpdateRentalDto) {
    return `This action updates a #${id} rental`;
  }

  remove(id: number) {
    return `This action removes a #${id} rental`;
  }
}
