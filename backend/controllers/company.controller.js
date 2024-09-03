import { Company } from "../models/company.model.js";

export const registerComapany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "Company already exists",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(200).json({
      message: "Company created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({
        message: "Company not found",
        companies,
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company found",
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(400).json({
        message: "Company not found",
        success: false,
      });
    } else {
      return res.status(200).json({
        company,
        success: true,
      });
    }
  } catch (error) {
    console.log(error.message);
    
  }
};

export const updatecompany = async (req, res) => {
 try {
   const { name, description, website, location, logo } = req.body;
 
   const updatecompany = { name, description, website, location, logo };
   const company = await Company.findByIdAndUpdate(
     req.params.id,
     updatecompany,
     { new: true }
   );
 
   if (!company) {
     return res.status(404).json({
       message: "Company not found",
       success: false,
     });
   }
   return res.status(200).json({
     message: "Company information updated.",
     success: true,
   });
 } catch (error) {
    console.log(error);
    
 }
};
