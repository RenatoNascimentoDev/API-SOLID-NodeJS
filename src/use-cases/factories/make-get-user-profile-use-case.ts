import { PrismausersRepository } from "@/repositories/prisma/prisma-users-repository";
import { GetUserProfileUseCase } from "../get-user-profile";

export function makeGetUserProfileUseCase() {
  const usersRepository = new PrismausersRepository();
  const UseCase = new GetUserProfileUseCase(usersRepository);

  return UseCase;
}
