// src/services/animalService.ts
import { Pet } from '@/Models/Pet';
import api from './api'; // ✅ Usa sua instância configurada

const IS_DEV = process.env.NODE_ENV === 'development';

// Mock data para desenvolvimento
const mockPets: Pet[] = [
  {
    id: '1',
    nome: 'Rex',
    especie: 'cachorro',
    raca: 'Labrador',
    idade: '2 anos',
    sexo: 'macho',
    porte: 'grande',
    descricao: 'Muito brincalhão e carinhoso',
    imagem: '/placeholder-dog.jpg',
    disponivel: true,
    donoId: '1',
    donoNome: 'ONG Amigos dos Animais',
    donoTipo: 'ong',
    donoEndereco: 'São Paulo, SP'
  }
];

export const animalService = {
  async getAll(): Promise<Pet[]> {
    try {
      const res = await api.get('/animals');
      console.log('✅ Dados carregados do backend');
      return res.data;
    } catch (error) {
      const err = error as { response?: { status?: number }; message?: string };
      // Em desenvolvimento, retorna mock data se backend estiver offline
      if (IS_DEV && this.isConnectionError(error)) {
        console.warn('📋 Backend offline - usando dados mock');
        return mockPets;
      }
      
      // Em produção ou outros erros, verifica se é 401 (não autorizado)
      if (err.response?.status === 401) {
        console.error('🔐 Não autorizado - redirecionando para login');
        // Seu interceptor já cuida do redirecionamento
      }
      
      console.error('Erro ao buscar animais:', err.message);
      throw error;
    }
  },

  async create(animal: Pet): Promise<Pet> {
    try {
      const res = await api.post('/animals', animal);
      console.log('✅ Animal criado no backend');
      return res.data;
    } catch (error) {
      const err = error as { response?: { status?: number }; message?: string };
      // Em desenvolvimento, simula sucesso se backend estiver offline
      if (IS_DEV && this.isConnectionError(error)) {
        console.warn('📋 Backend offline - simulando criação local');
        return { ...animal, id: Date.now().toString() };
      }
      
      if (err.response?.status === 401) {
        console.error('🔐 Não autorizado para criar animal');
      }
      
      console.error('Erro ao criar animal:', err.message);
      throw error;
    }
  },

  async deleteAll(): Promise<void> {
    try {
      await api.delete('/animals');
      console.log('✅ Todos os animais removidos do backend');
    } catch (error) {
      const err = error as { message?: string };
      if (IS_DEV && this.isConnectionError(error)) {
        console.warn('📋 Backend offline - simulando limpeza local');
        return;
      }
      console.error('Erro ao deletar animais:', err.message);
      throw error;
    }
  },

  // Método para testar conexão de forma segura
  async testConnection(): Promise<{ success: boolean; message: string }> {
    try {
      const startTime = Date.now();
      
      // Testa um endpoint seguro que não modifica dados
      await api.get('/animals?test=connection');
      
      const responseTime = Date.now() - startTime;
      
      return {
        success: true,
        message: `✅ Conexão estabelecida (${responseTime}ms)`
      };
    } catch (error) {
      if (this.isConnectionError(error)) {
        return {
          success: false,
          message: '❌ Backend não está respondendo'
        };
      }
      
      // Outros erros (como 401) não são problemas de conexão
      const err = error as { response?: { status?: number }; message?: string };
      return {
        success: false,
        message: `⚠️ Backend respondeu com erro: ${err.response?.status || err.message}`
      };
    }
  },

  // Verifica se o erro é de conexão (não resposta do servidor)
  isConnectionError(error: unknown): boolean {
    const err = error as { code?: string; message?: string; response?: unknown };
    return (
      err.code === 'NETWORK_ERROR' ||
      err.code === 'ECONNREFUSED' ||
      err.message?.includes('Network Error') ||
      err.message?.includes('timeout') ||
      !err.response // Sem resposta do servidor
    );
  }
};