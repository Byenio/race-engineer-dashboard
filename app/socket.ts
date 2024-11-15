"use client";

import {
  PacketCarDamageData,
  PacketCarSetupData,
  PacketCarStatusData,
  PacketCarTelemetryData,
  PacketEventData,
  PacketFinalClassificationData,
  PacketHeader,
  PacketLapData,
  PacketLobbyInfoData,
  PacketMotionExData,
  PacketParticipantsData,
  PacketSessionData,
  PacketSessionHistoryData,
  PacketTyreSetsData,
} from "f1-23-udp";
import { io, Socket } from "socket.io-client";

interface F123Events {
  carDamage: (data: PacketCarDamageData) => void;
  carSetup: (data: PacketCarSetupData) => void;
  carStatus: (data: PacketCarStatusData) => void;
  carTelemetry: (data: PacketCarTelemetryData) => void;
  event: (data: PacketEventData) => void;
  finalClassification: (data: PacketFinalClassificationData) => void;
  header: (data: PacketHeader) => void;
  lapData: (data: PacketLapData) => void;
  lobbyInfo: (data: PacketLobbyInfoData) => void;
  motionEx: (data: PacketMotionExData) => void;
  participants: (data: PacketParticipantsData) => void;
  session: (data: PacketSessionData) => void;
  sessionHistory: (data: PacketSessionHistoryData) => void;
  tyreSets: (data: PacketTyreSetsData) => void;
}

export const socket: Socket<F123Events> = io();
