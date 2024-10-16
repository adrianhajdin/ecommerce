import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import { EntityManager } from "typeorm";

import OnboardingService from "../../../services/onboarding";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const onboardingService: OnboardingService =
    req.scope.resolve("onboardingService");

  const status = await onboardingService.retrieve();

  res.status(200).json({ status });
}

export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const onboardingService: OnboardingService =
    req.scope.resolve("onboardingService");
  const manager: EntityManager = req.scope.resolve("manager");

  const status = await manager.transaction(async (transactionManager) => {
    return await onboardingService
      .withTransaction(transactionManager)
      .update(req.body);
  });

  res.status(200).json({ status });
}
