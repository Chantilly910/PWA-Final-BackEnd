import { Request, Response } from 'express';
import admin from '../utils/firebaseAdmin';

export const login = async (req: Request, res: Response) => {
  const { idToken } = req.body;
  if (!idToken) {
    return res.status(400).json({ message: 'Token no proporcionado' });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    res.json({ uid: decoded.uid, email: decoded.email });
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Credenciales incompletas' });
  }

  try {
    const userRecord = await admin.auth().createUser({ email, password });
    res.status(201).json({ uid: userRecord.uid, email: userRecord.email });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
export const getUser = async (req: Request, res: Response) => {
  const { uid } = req.params;
  if (!uid) {
    return res.status(400).json({ message: 'UID no proporcionado' });
  }

  try {
    const userRecord = await admin.auth().getUser(uid);
    res.json({ uid: userRecord.uid, email: userRecord.email });
  } catch (error) {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};