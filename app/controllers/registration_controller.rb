class RegistrationsController < Devise::RegistrationsController  
    respond_to :json, :controllers => {sessions: 'sessions', registrations: 'registrations'}
    before_filter :configure_permitted_parameters

    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.for(:sign_up) do |u|
            u.permit(:name, :email, :password, :password_confirmation)
        end

        devise_parameter_sanitizer.for(:account_update) do |u|
            u.permit(:name, :email, :password, :password_confirmation, :current_password)
        end
    end
end  
