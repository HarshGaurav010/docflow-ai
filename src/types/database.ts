export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          business_name: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          business_name?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          business_name?: string | null;
          created_at?: string;
        };
      };
      documents: {
        Row: {
          id: string;
          user_id: string;
          file_name: string;
          file_path: string;
          file_type: string;
          status: string;
          uploaded_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          file_name: string;
          file_path: string;
          file_type: string;
          status?: string;
          uploaded_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          file_name?: string;
          file_path?: string;
          file_type?: string;
          status?: string;
          uploaded_at?: string;
        };
      };
      invoice_data: {
        Row: {
          id: string;
          document_id: string;
          vendor_name: string | null;
          invoice_number: string | null;
          invoice_date: string | null;
          subtotal: number | null;
          tax: number | null;
          total: number | null;
          currency: string | null;
          confidence: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          document_id: string;
          vendor_name?: string | null;
          invoice_number?: string | null;
          invoice_date?: string | null;
          subtotal?: number | null;
          tax?: number | null;
          total?: number | null;
          currency?: string | null;
          confidence?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          document_id?: string;
          vendor_name?: string | null;
          invoice_number?: string | null;
          invoice_date?: string | null;
          subtotal?: number | null;
          tax?: number | null;
          total?: number | null;
          currency?: string | null;
          confidence?: number | null;
          created_at?: string;
        };
      };
      workflow_logs: {
        Row: {
          id: string;
          document_id: string;
          action: string;
          status: string;
          message: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          document_id: string;
          action: string;
          status: string;
          message?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          document_id?: string;
          action?: string;
          status?: string;
          message?: string | null;
          created_at?: string;
        };
      };
      settings: {
        Row: {
          id: string;
          user_id: string;
          auto_approval_threshold: number;
          confidence_threshold: number;
          duplicate_detection_enabled: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          auto_approval_threshold?: number;
          confidence_threshold?: number;
          duplicate_detection_enabled?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          auto_approval_threshold?: number;
          confidence_threshold?: number;
          duplicate_detection_enabled?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
