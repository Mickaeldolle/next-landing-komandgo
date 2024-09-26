import { user as User, restaurant as Restaurant } from "@prisma/client";
import { User as UserProspect } from "@/prisma/generated/client2";

export type UserWithRestaurant = User & {
  restaurant: Restaurant[] | undefined; // Une relation avec plusieurs restaurants
} ;

export type Users = UserProspect | UserWithRestaurant