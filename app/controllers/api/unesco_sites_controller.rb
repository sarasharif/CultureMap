class Api::UnescoSitesController < ApplicationController

  def show
    @unesco_site = UnescoSite.find(params[:id])
    render json: @unesco_site

  end

  def index
  end

  def random_show
    @unesco_site = UsescoSite.generate_random_site
    render json: @unesco_site
  end

end
