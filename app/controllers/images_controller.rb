class ImagesController < ApplicationController

  def index
    @claims = ClaimDetail.all
  end
	
  def new
    @claim =  ClaimDetail.new
  end
    
  def create
    @claim = ClaimDetail.new(claim_params) 

    if @claim.save!	  
       update_claim_image @claim
       flash[:success] = "Data saved."
	else
	   flash[:error] = "Sorry!! Something went wrong."
	end
       redirect_to root_path
  end
	
  def show
    @claim = ClaimDetail.find_by(id: params[:id])
  end
     
  def update_claim_image claim
    claim.update(image_params) rescue nil
  end

  private
	
  def claim_params
    params.require(:claim_detail).permit(:title)
  end
	
  def image_params
    params.require(:claim_detail).permit(:id,:title, :_destroy, images_attributes: [:id,  :detail, :file , :_destroy] )
  end

end
