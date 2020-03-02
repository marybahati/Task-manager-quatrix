
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: 'Your email is required',
        trim: true
    },

    customer_first_name: {
        type: String,
        required: 'This is required',
    },

    customer_last_name: {
        type: String,
        required: 'This is required',
        max: 100
    },

    personnel_first_name: {
        type: String,
        required: 'This is required',
        max: 255
    },

    personnel_other_name: {
        type: String,
        
        required: 'This is required',
        max: 255
    },

    password: {
        type: String,
        required: 'This is required',
        max: 100
    },

    customer_phone: {
        type: String,
        required: 'This is required',
        max: 100
    },

    agentId: {
        type: String,
        
    },
    assigned: {
        type: String,
        required: 'This is required',
    },
    in_progress: {
        type: String,
        required: 'This is required',
    },
    completed: {
        type: String,
        
    },
    deferred: {
        type: String,
        required: 'This is required',
    },
    status: {
        type: String,
    },
    location: {
        type: String,
    },
    gender: {
        type: String,
    },
    age: {
        type: String,
    },
    access_code: {
        type: String,
    },
    splash_page: {
        type: String,
    },
    mpesa: {
        type: String,
    },
    autoplay: {
        type: String,
    },
    comments: {
        type: String,
    },
    registration: {
        type: String,
    }
}, {timestamps: true});


UserSchema.pre('save',  function(next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    let payload = {
        email: this.email,
        customer_first_name: this.customer_first_name,
        customer_last_name: this.customer_last_name,
        personnel_first_name: this.personnel_first_name,
        personnel_other_name: this.personnel_other_name,
        password: this.password,
        customer_phone: this.customer_phone,
        assigned: this.assigned,
        // in_progress: this.in_progress,
        deferred: this.deferred,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: parseInt(expirationDate.getTime() / 1000, 10)
    });
};

mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('Users', UserSchema);