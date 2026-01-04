import React from 'react';
import { Mail, Lock, X, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useTranslation } from 'react-i18next';

const AuthPage = ({ 
  isRegistering, 
  setIsRegistering, 
  email, 
  setEmail, 
  password, 
  setPassword, 
  authError, 
  setAuthError, 
  handleAuth 
}) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white md:bg-slate-50 px-4">
      <Card className="w-full max-w-sm shadow-none md:shadow-xl border-none md:border md:border-slate-100">
        <CardHeader className="text-center pb-6 md:pb-8">
          <div className="flex justify-center mb-3 md:mb-4">
            <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-indigo-600 text-white shadow-lg">
              <Brain size={24} className="md:w-8 md:h-8" />
            </div>
          </div>
          <CardTitle className="text-xl md:text-2xl font-black text-slate-900">
            {isRegistering ? t("auth.create_account") : t("auth.welcome")}
          </CardTitle>
          <CardDescription className="text-xs md:text-sm text-slate-500 mt-1 md:mt-2">
            {isRegistering ? t("auth.description_register") : t("auth.description_login")}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4 md:space-y-5">
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">{t("auth.email")}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 md:w-[18px] md:h-[18px]" size={14} />
                <Input 
                  type="email" 
                  required
                  className="pl-10 h-10 md:h-12 bg-slate-50 border-slate-200 text-sm focus:bg-white transition-all"
                  placeholder="nev@pelda.hu"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">{t("auth.password")}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 md:w-[18px] md:h-[18px]" size={14} />
                <Input 
                  type="password" 
                  required
                  className="pl-10 h-10 md:h-12 bg-slate-50 border-slate-200 text-sm focus:bg-white transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            {authError && (
              <Alert variant="destructive" className="p-3 bg-red-50 border-none text-red-600 text-xs">
                <div className="flex items-center gap-2">
                  <X size={14} />
                  <AlertDescription className="leading-tight">{authError}</AlertDescription>
                </div>
              </Alert>
            )}

            <Button type="submit" className="w-full h-10 md:h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all text-sm">
              {isRegistering ? t("auth.create_account") : t("auth.sign_in")}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-1 md:space-y-2 border-t border-slate-50 pt-4 md:pt-6 mt-2 md:mt-4">
          <p className="text-slate-400 text-[10px] md:text-xs">
            {isRegistering ? t("auth.have_account") : t("auth.no_account")}
          </p>
          <Button 
            variant="link"
            onClick={() => { setIsRegistering(!isRegistering); setAuthError(''); }}
            className="text-indigo-600 font-black hover:text-indigo-700 p-0 h-auto text-xs"
          >
            {isRegistering ? t("auth.sign_in_instead") : t("auth.create_free_account")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthPage;
