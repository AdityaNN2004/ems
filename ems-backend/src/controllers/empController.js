const empService = require('../services/empService');

exports.getEmp = async (req, res, next) => {
    try {
        // 1. Parse pagination parameters from query string
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // 2. Fetch paginated data and total count in parallel (faster)
        const [emp, total] = await Promise.all([
            empService.getEmp(skip, limit),
            empService.countEmps()
        ]);

        // 3. Send unified response
        res.status(200).json({
            success: true,
            data: emp,
            pagination: {
                totalItems: total,
                totalPages: Math.ceil(total / limit),
                currentPage: page,
                limit: limit
            }
        });
    } catch (exception) {
        console.error("Exception in getEmp:", exception);
        return res.status(500).json({ message: "Internal Server Error !!" });
    }
};

exports.createEmp = async (req, res, next) => {
    try {
        const emp = await empService.createEmp(req.body);
        return res.status(201).json({
            success: true,
            data: emp,
            message: "Employee Created Successfully !!"
        });
    } catch (exception) {
        console.error("Exception in createEmp:", exception);
        return res.status(500).json({ message: "Internal Server Error !!" });
    }
};

exports.updateEmp = async (req, res, next) => {
    try {
        const updatedEmp = await empService.updateEmp(req.params.id, req.body);
        if (!updatedEmp) {
            return res.status(404).json({ message: "Employee not found !!" });
        }
        return res.status(200).json({ 
            success: true,
            data: updatedEmp, 
            message: "Employee Updated Successfully !!" 
        });
    } catch (exception) {
        console.error("Exception in updateEmp:", exception);
        return res.status(500).json({ message: "Internal Server Error !!" });
    }
};

exports.deleteEmp = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedEmp = await empService.deletedEmp(id);
        if (!deletedEmp) {
            return res.status(404).json({ message: "Employee Not Found !!" });
        }
        return res.status(200).json({ 
            success: true,
            message: "Employee Deleted Successfully !!" 
        });
    } catch (exception) {
        console.error("Exception in deleteEmp:", exception);
        return res.status(500).json({ message: "Internal Server Error !!" });
    }
};
