class ProfilesController < ApplicationController
    respond_to :json

    def show
        if user_signed_in?
            render json: { user_id: current_user.id, name: current_user.name }
        else
            render json: { user_id:nil, name:nil  }
        end
    end
end
