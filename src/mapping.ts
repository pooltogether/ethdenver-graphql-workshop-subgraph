import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  AdminAdded,
  AdminRemoved,
  Committed,
  CommittedDepositWithdrawn,
  Deposited,
  DepositedAndCommitted,
  DepositsPaused,
  DepositsUnpaused,
  FeeCollected,
  NextFeeBeneficiaryChanged,
  NextFeeFractionChanged,
  OpenDepositWithdrawn,
  Opened,
  Rewarded,
  RolledOver,
  SponsorshipAndFeesWithdrawn,
  SponsorshipDeposited,
  Withdrawn
} from "../generated/Contract/Contract"
import { PoolPrize } from '../generated/schema'

export function handleAdminAdded(event: AdminAdded): void {}

export function handleAdminRemoved(event: AdminRemoved): void {}

export function handleCommitted(event: Committed): void {}

export function handleCommittedDepositWithdrawn(
  event: CommittedDepositWithdrawn
): void {
  let contract = Contract.bind(event.address)
  let drawId = contract.currentOpenDrawId()
  let prize = PoolPrize.load(drawId.toHexString())
  prize.drawId = drawId
  prize.withdrawalCount = prize.withdrawalCount.plus(BigInt.fromI32(1))
  prize.withdrawalAmount = prize.withdrawalAmount.plus(event.params.amount);
  prize.save()
}

export function handleDeposited(event: Deposited): void { 
  let contract = Contract.bind(event.address)
  let drawId = contract.currentOpenDrawId()

  let prize = PoolPrize.load(drawId.toHexString())
  prize.depositCount = prize.depositCount.plus(BigInt.fromI32(1))
  prize.depositAmount = prize.depositAmount.plus(event.params.amount)
  prize.save()
}

export function handleDepositedAndCommitted(
  event: DepositedAndCommitted
): void {}

export function handleDepositsPaused(event: DepositsPaused): void {}

export function handleDepositsUnpaused(event: DepositsUnpaused): void {}

export function handleFeeCollected(event: FeeCollected): void {}

export function handleNextFeeBeneficiaryChanged(
  event: NextFeeBeneficiaryChanged
): void {}

export function handleNextFeeFractionChanged(
  event: NextFeeFractionChanged
): void {}

export function handleOpenDepositWithdrawn(event: OpenDepositWithdrawn): void {
  let contract = Contract.bind(event.address)
  let drawId = contract.currentOpenDrawId()
  let prize = PoolPrize.load(drawId.toHexString())
  prize.drawId = drawId
  prize.withdrawalCount = prize.withdrawalCount.plus(BigInt.fromI32(1))
  prize.withdrawalAmount = prize.withdrawalAmount.plus(event.params.amount);
  prize.save()
}

export function handleOpened(event: Opened): void {
  let prize = new PoolPrize(event.params.drawId.toHexString())
  prize.drawId = event.params.drawId
  prize.depositCount = BigInt.fromI32(0)
  prize.depositAmount = BigInt.fromI32(0)
  prize.withdrawalCount = BigInt.fromI32(0)
  prize.withdrawalAmount = BigInt.fromI32(0)
  prize.save()
}

export function handleRewarded(event: Rewarded): void {}

export function handleRolledOver(event: RolledOver): void {}

export function handleSponsorshipAndFeesWithdrawn(
  event: SponsorshipAndFeesWithdrawn
): void {
  let contract = Contract.bind(event.address)
  let drawId = contract.currentOpenDrawId()
  let prize = PoolPrize.load(drawId.toHexString())
  prize.drawId = drawId
  prize.withdrawalCount = prize.withdrawalCount.plus(BigInt.fromI32(1))
  prize.withdrawalAmount = prize.withdrawalAmount.plus(event.params.amount)
  prize.save()
}

export function handleSponsorshipDeposited(event: SponsorshipDeposited): void {
  let contract = Contract.bind(event.address)
  let drawId = contract.currentOpenDrawId()
  let prize = PoolPrize.load(drawId.toHexString())
  prize.drawId = drawId
  prize.depositCount = prize.depositCount.plus(BigInt.fromI32(1))
  prize.depositAmount = prize.depositAmount.plus(event.params.amount)
  prize.save()
}

export function handleWithdrawn(event: Withdrawn): void {
  let contract = Contract.bind(event.address)
  let drawId = contract.currentOpenDrawId()

  let prize = PoolPrize.load(drawId.toHexString())
  prize.withdrawalCount = prize.withdrawalCount.plus(BigInt.fromI32(1))
  prize.withdrawalAmount = prize.withdrawalAmount.plus(event.params.amount)
  prize.save()
}
