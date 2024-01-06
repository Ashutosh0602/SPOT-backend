import { Inject, Injectable } from '@nestjs/common';
import { CreateNearestDto } from './dto/create-nearest.dto';
import { UpdateNearestDto } from './dto/update-nearest.dto';
import Redis from "ioredis"
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NearestService {
  constructor(private readonly configService:ConfigService,@Inject('REDIS_CLIENT') private client){}



  create(createNearestDto: CreateNearestDto) {
    return 'This action adds a new nearest';
  }

  async findAll() {
    const client = new Redis(`rediss://default:${this.configService.get('REDIS_PASS')}@usw1-fresh-gnu-33499.upstash.io:33499`);
    // const get=this.redis.geosearch('Ashutosh', 30.2343348, 30.243243, 50, "km", function(err, reply) {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    
    //   console.log(reply);
    // })
    const get= await client.geosearch('Ashutosh','FROMLONLAT', 35.233532,21.23434,'BYRADIUS',4000, "km", "ASC", 'WITHCOORD',  'WITHDIST')
    // const get=await client.geoadd('Dheeraj',21.23434, 35.233532, 'Vijay Vihar');
    return get;
  }

  findOne(id: number) {
    return `This action returns a #${id} nearest`;
  }

  update(id: number, updateNearestDto: UpdateNearestDto) {
    return `This action updates a #${id} nearest`;
  }

  remove(id: number) {
    return `This action removes a #${id} nearest`;
  }
}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDu3oeBzE6RA58e2T629Nmx2cwlT1NhQhw",
//   authDomain: "spot-dfe33.firebaseapp.com",
//   projectId: "spot-dfe33",
//   storageBucket: "spot-dfe33.appspot.com",
//   messagingSenderId: "550574198799",
//   appId: "1:550574198799:web:106990b32b3bdaa48d537a",
//   measurementId: "G-TCL33DL3WX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);